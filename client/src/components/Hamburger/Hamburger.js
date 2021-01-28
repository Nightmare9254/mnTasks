import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListHamburger from './ListHamburger';
import { useCookies } from 'react-cookie';
import { useCounter } from '../../store/sub';
import Tour from '../Guide/Tour';
import { Link } from 'react-router-dom';

const HamburgerDiv = styled.div`
  background: #1db95e;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  text-align: right;
  padding: 1rem;
  z-index: 6;
`;
const HelpDiv = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 6;
`;

const Hamburger = ({ isOpen, setIsOpen, logOut, correct, userD }) => {
  const [state, actions] = useCounter();

  useEffect(() => {
    fetch('/api/userpanel')
      .then((res) => res.json())
      .then((json) => {
        if (json.correct) {
          actions.user(json);
        }
      });
  }, []);

  const STEPS = [
    {
      target: '.credits',
      content: 'Credits are used to add new task',
      disableBeacon: true,
      placement: 'top',
      floaterProps: {
        disableAnimation: true,
      },
    },
    {
      target: '.hamburger_history',
      content: 'You can view all your completed task in history section',
      placement: 'bottom-end',
      disableBeacon: true,

      floaterProps: {
        disableAnimation: true,
      },
    },
    {
      target: '.hamburger_credits',
      content: 'If you run out of credits you can buy them in our shop',
      placement: 'bottom-end',
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true,
      },
    },
  ];

  const [cookies] = useCookies({});
  const { user } = cookies;
  return (
    <>
      <HelpDiv isOpen={isOpen}>
        <div
          onClick={() => setIsOpen(false)}
          className="hamburger__left__border"
        ></div>
        <HamburgerDiv>
          <svg
            onClick={() => setIsOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            name="hide menu"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z" />
          </svg>
          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <p style={{ fontSize: '3rem', color: '#fff' }}>
              <span style={{ color: '#2d3748', fontWeight: '700' }}>mn</span>
              Tasks
            </p>
          </div>
          <div className="info__user">
            <p className="first">Hello!</p>
            {state.correct && (
              <p className="second">
                {state.userData.user[0].name} {state.userData.user[0].surrname}
              </p>
            )}
          </div>

          {state.correct && (
            <p className="credits lines-hamburger">
              Your credits:
              <span>{state.userData.user[0].credits}</span>
            </p>
          )}

          <div>
            <ListHamburger />
          </div>
          {isOpen && state.userData.user[0].newUser && (
            <Tour open={isOpen} steps={STEPS} />
          )}
          <div className="log__out">
            <button onClick={logOut}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z" />
              </svg>
            </button>
          </div>
          
          <div style={{position: 'absolute', bottom: '15px',left: '15px'}}>
            <Link to="/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path d="M24 14.187v-4.374c-2.148-.766-2.726-.802-3.027-1.529-.303-.729.083-1.169 1.059-3.223l-3.093-3.093c-2.026.963-2.488 1.364-3.224 1.059-.727-.302-.768-.889-1.527-3.027h-4.375c-.764 2.144-.8 2.725-1.529 3.027-.752.313-1.203-.1-3.223-1.059l-3.093 3.093c.977 2.055 1.362 2.493 1.059 3.224-.302.727-.881.764-3.027 1.528v4.375c2.139.76 2.725.8 3.027 1.528.304.734-.081 1.167-1.059 3.223l3.093 3.093c1.999-.95 2.47-1.373 3.223-1.059.728.302.764.88 1.529 3.027h4.374c.758-2.131.799-2.723 1.537-3.031.745-.308 1.186.099 3.215 1.062l3.093-3.093c-.975-2.05-1.362-2.492-1.059-3.223.3-.726.88-.763 3.027-1.528zm-4.875.764c-.577 1.394-.068 2.458.488 3.578l-1.084 1.084c-1.093-.543-2.161-1.076-3.573-.49-1.396.581-1.79 1.693-2.188 2.877h-1.534c-.398-1.185-.791-2.297-2.183-2.875-1.419-.588-2.507-.045-3.579.488l-1.083-1.084c.557-1.118 1.066-2.18.487-3.58-.579-1.391-1.691-1.784-2.876-2.182v-1.533c1.185-.398 2.297-.791 2.875-2.184.578-1.394.068-2.459-.488-3.579l1.084-1.084c1.082.538 2.162 1.077 3.58.488 1.392-.577 1.785-1.69 2.183-2.875h1.534c.398 1.185.792 2.297 2.184 2.875 1.419.588 2.506.045 3.579-.488l1.084 1.084c-.556 1.121-1.065 2.187-.488 3.58.577 1.391 1.689 1.784 2.875 2.183v1.534c-1.188.398-2.302.791-2.877 2.183zm-7.125-5.951c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z" />
              </svg>
            </Link>
          </div>
        </HamburgerDiv>
      </HelpDiv>
    </>
  );
};

export default Hamburger;
