import React, { useState } from 'react';
import { changePassType } from './changePassType';
import { Link, useParams, useHistory } from 'react-router-dom';
import { FinishedReset, Star, OpenEye, ClosedEye } from './Icons';
import Popup from './Popup';
import Warning from './Warning';

const NewPassword = () => {
  const [message, setMessage] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confrimNewPassword, setConfirmNewPassword] = useState('');
  const [passwordVis, setPasswordVis] = useState('password');
  const [isOpen, setIsOpen] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const { token } = useParams();
  const history = useHistory();

  const password = () => {
    fetch('/api/newPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword, confrimNewPassword, token }),
    })
      .then((response) => response.json())
      .then((json) => {
        setMessage(json);
        if (json.correct) {
          setNewPassword('');
          setConfirmNewPassword('');
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
      });
  };

  if (message.correct) {
    setTimeout(() => {
      history.push('/login');
    }, 2000);
  }

  return (
    <>
      <div className="popup-relative">
        <main className="main__reset">
          <div
            style={{ marginTop: '2rem', width: '100%', textAlign: 'left' }}
            className="link__back"
          >
            <Link style={{ margin: '2rem' }} to="/login">
              <svg
                width="40"
                height="40"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="24.0475"
                  cy="24.0475"
                  r="23.0475"
                  stroke="#4A5568"
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.344 25.55L24.56 33.4523L23.202 35L11 24.5L23.224 14L24.556 15.5813L15.348 23.45H39V25.55H15.344Z"
                  fill="#4A5568"
                />
              </svg>
            </Link>
          </div>
          <h2
            className="heading-2"
            style={{ color: '#1db95e', marginTop: '4rem' }}
          >
            Forgot password?
          </h2>
          <form
            style={{ margin: '2rem' }}
            className="section__formWrapper"
            name="reset password form"
          >
            <label className="signUp__label--password form__label">
              <div className="form__labelWrapper-para">
                {Star}
                <p className="label__paragraph"> New password:</p>
              </div>
              <input
                className="label__input label__input--password"
                type={passwordVis}
                placeholder="New password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
            <label className="signUp__label--password form__label">
              <div className="form__labelWrapper-para">
                {Star}
                <p className="label__paragraph">Confirm new password:</p>
              </div>
              <input
                className="label__input label__input--password"
                type={passwordVis}
                placeholder="Confirm new password"
                required
                value={confrimNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <i
                tabIndex="0"
                aria-label="checkbox"
                className="toggle_password"
                onClick={(e) =>
                  changePassType(e, passwordVis, setPasswordVis, setIsShown)
                }
                onKeyUp={(e) =>
                  changePassType(e, passwordVis, setPasswordVis, setIsShown)
                }
              >
                {isShown && ClosedEye}
                {!isShown && OpenEye}
              </i>
            </label>
            <p
              className="required__fields"
              style={{
                textAlign: 'left',
                width: '100%',
                color: 'var(--secondary-grey)',
              }}
            >
              {Star} Required fields
            </p>
          </form>
          <div style={{ marginTop: '1rem' }}>{FinishedReset}</div>

          <section className="section__buttons">
            <button className="btn__main--full" onClick={password}>
              Set new password
            </button>
          </section>
        </main>
        {message.correct && (
          <Popup
            title="Your password has been changed"
            message="You will be redirect in few seconds"
            iconLink={
              <Link to="/login">
                <div className="container__popup__svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="var(--white)"
                  >
                    <path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z" />
                  </svg>
                </div>
              </Link>
            }
          />
        )}
        {isOpen && !message.correct && (
          <Warning setIsOpen={setIsOpen} errorMessage={message.message} />
        )}
      </div>
    </>
  );
};

export default NewPassword;
