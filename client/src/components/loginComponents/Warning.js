import React from 'react';
import styled from 'styled-components';

const DivError = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 2rem;
  background: #ff4133;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Warning = ({ errorMessage, position, setIsOpen }) => {
  return (
    <DivError
      style={
        position
          ? { position: 'static', margin: '3rem' }
          : { position: 'absolute' }
      }
      className="section__message animation-warning"
    >
      <p style={{ fontSize: '1.4rem', width: '95%' }}>{errorMessage}</p>
      <div style={{ width: '5%', textAlign: 'right' }}>
        <svg
          onClick={() => setIsOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          name="hide menu"
          fill="var(--white)"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z" />
        </svg>
      </div>
    </DivError>
  );
};

export default Warning;
