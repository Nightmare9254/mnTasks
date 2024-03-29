import { useCounter } from './store/sub';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  SwitchTransition,
  RouteTransition,
} from './components/animation/PageTransitions';
import Todo from './components/todo/Todo';
import Main from './components/page/Main';
import Terms from './components/page/Terms';
import About from './components/page/About';
import Policy from './components/page/Policy';
import ScrollToTop from './functions/ScrollTo';
import Hisotry from './components/page/History';
import HoWorks from './components/page/HoWorks';
import Settings from './components/page/Settings';
import NotFound from './components/page/NotFound';
import PayNow from './components/payments/PayNow';
import ContactUs from './components/page/ContactUs';
import CookiesPopup from './components/CookiesPopup';
import SignIn from './components/loginComponents/SignIn';
import SignUp from './components/loginComponents/SignUp';
import UserPanel from './components/userDashboard/UserPanel';
import Subscription from './components/payments/Subscriptions';
import PaymentMethod from './components/payments/PaymentMethod';
import PaymentConfirm from './components/payments/PaymentConfirm';
import NewPassword from './components/loginComponents/NewPassword';
import AlmostThere from './components/loginComponents/AlmostThere';
import ConfirmAccount from './components/loginComponents/ConfirmAccount';
import ResetPasswordForm from './components/loginComponents/ResetPasswordForm';

function App() {
  const [loadingAnimation, setStartAnimation] = useState(true);
  const [cookies] = useCookies({});
  const [state, actions] = useCounter();
  const { user, accept } = cookies;

  const acceptCookieHandler = () => {
    fetch('/cookie-accept', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => window.location.reload());
  };

  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(false);
      actions.changeStateAnimation(true);
    }, 1500);
  }, []);

  return (
    <div className="App">
      <ScrollToTop />

      <SwitchTransition>
        <RouteTransition exact path="/">
          <Main />
        </RouteTransition>
        <RouteTransition exact path="/sign-up">
          <SignUp />
        </RouteTransition>
        <RouteTransition exact path="/reset">
          <ResetPasswordForm />
        </RouteTransition>
        <RouteTransition exact path="/reset/:token">
          <NewPassword />
        </RouteTransition>
        <RouteTransition exact path="/almost-there">
          {state.canSeeAlmost ? <AlmostThere /> : <Redirect to="/" />}
        </RouteTransition>
        <RouteTransition exact path="/almost-there/:token">
          <ConfirmAccount />
        </RouteTransition>
        <RouteTransition exact path="/user-panel">
          {!user ? <Redirect to="/login" /> : <UserPanel />}
        </RouteTransition>
        <RouteTransition exact path="/login">
          {user ? <Redirect to="/user-panel" /> : <SignIn />}
        </RouteTransition>
        {user && (
          <RouteTransition exact path="/completed-tasks">
            <Hisotry />
          </RouteTransition>
        )}
        {user && (
          <RouteTransition exact path="/todo">
            <Todo />
          </RouteTransition>
        )}
        <RouteTransition exact path="/terms">
          <Terms />
        </RouteTransition>
        {user && (
          <RouteTransition exact path="/subscription">
            <Subscription />
          </RouteTransition>
        )}
        {user && (
          <RouteTransition exact path="/confirm-pay">
            {state.count > 0 ? (
              <PaymentConfirm />
            ) : (
              <Redirect to="/subscription" />
            )}
          </RouteTransition>
        )}
        {user && (
          <RouteTransition exact path="/method-payment">
            <PaymentMethod />
          </RouteTransition>
        )}
        <RouteTransition exact path="/pay-now">
          {state.count > 1 ? <PayNow /> : <Redirect to="/subscription" />}
        </RouteTransition>
        {user && (
          <RouteTransition exact path="/settings">
            <Settings />
          </RouteTransition>
        )}
        <RouteTransition exact path="/policy">
          <Policy />
        </RouteTransition>
        <RouteTransition exact path="/about">
          <About />
        </RouteTransition>
        <RouteTransition exact path="/contact-us">
          <ContactUs />
        </RouteTransition>
        <RouteTransition exact path="/how-works" component={HoWorks}>
          <HoWorks />
        </RouteTransition>

        <RouteTransition>
          <NotFound />
        </RouteTransition>
      </SwitchTransition>

      {!accept && state.animationStop && (
        <CookiesPopup acceptFunction={acceptCookieHandler} />
      )}
    </div>
  );
}

export default App;
