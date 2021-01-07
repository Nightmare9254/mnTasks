import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SignIn = () => {
  const [message, setMessage] = useState('');
  const [userData, setUserData] = useState({
    Email: '',
    Password: '',
  });
  const [passwordVis, setPasswordVis] = useState('password');
  const [isVisible, setIsVisible] = useState(true);
  const [correct, setCorrect] = useState(false);
  const history = useHistory();
  const handlerInput = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setUserData({ ...userData, [name]: value });
  };

  const OpenEye = styled.svg`
    display: ${({ isVisible }) => (isVisible ? 'none' : 'block')};
  `;
  const CloseEye = styled.svg`
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  `;

  const hanlderSign = (e) => {
    //e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((json) => {
        setMessage(json);
        if (json.correct) {
          window.location.href = '/user-panel';
        }
      });
  };
  const changePassType = (e) => {
    if (e.keyCode === 9) {
      return;
    }

    if (passwordVis === 'password') {
      setPasswordVis('text');
      setIsVisible(false);
    } else {
      setPasswordVis('password');
      setIsVisible(true);
    }
  };

  return (
    <main className="section__signIn ">
      <h1 className="section__header">Sign In</h1>
      <form className="section__formWrapper" name="sign in form">
        <label className="signUp__label--email form__label">
          <p className="label__paragraph">E-mail address:</p>
          <input
            className="label__input label__input--email"
            type="email"
            name="Email"
            placeholder="Your e-mail  address"
            required
            value={userData.Email}
            onChange={(e) => handlerInput(e)}
          />
        </label>
        <label className="signUp__label--password form__label">
          <p className="label__paragraph">Password: </p>
          <input
            className="label__input label__input--password"
            type={passwordVis}
            name="Password"
            placeholder="Password"
            value={userData.name}
            onChange={(e) => handlerInput(e)}
          />
          <span
            tabIndex="0"
            role="checkbox"
            className="toggle_password"
            isVisible={isVisible}
            onClick={changePassType}
            onKeyUp={(e) => changePassType(e)}
          >
            <OpenEye
              isVisible={isVisible}
              className="label__eye--open label__eye"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z" />
            </OpenEye>
            <CloseEye
              isVisible={isVisible}
              className="label__eye--closed label__eye"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z" />
            </CloseEye>
          </span>
          <p className="section__message section__message--signin">
            {message.message}
          </p>
        </label>
      </form>
      <section className="section__buttons">
        <button
          onClick={(e) => hanlderSign(e)}
          className="signIn__btn btn__main--full "
        >
          Login
        </button>
      </section>
    </main>
  );
};

export default SignIn;
