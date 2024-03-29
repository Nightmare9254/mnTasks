import { useCookies } from 'react-cookie';
import React from 'react';
import Footer from './Footer';
import EmptyBurger from '../../bgs/EmptyBurger';
import MenuBottom from '../Hamburger/MenuBottom';
import HamburgerTop from '../Hamburger/HamburgerTop';

const Terms = () => {
  const [cookies] = useCookies({});
  const { user } = cookies;

  return (
    <>
      {user && <HamburgerTop />}
      {!user && <EmptyBurger />}
      <main className="terms">
        <h1 className="section__title">Term of sevice</h1>
        <p className="main__info">
          This Terms of Service <strong>(the “Terms”)</strong> describes the
          rights and responsibilities that apply to your use of
          <span className="label__tearms label__span--link">
            <strong>nmTasks </strong>
          </span>
          websites, services.
        </p>
      </main>
      <Footer />
      {user && <MenuBottom />}
    </>
  );
};

export default Terms;
