import React from 'react';
import { Link } from 'react-router-dom';
import { home, plusSign, phone2 } from './HamburgerIcons';
import { useCounter } from '../../store/sub';

function MenuBottom() {
  const [, actions] = useCounter();

  return (
    <nav className="menuBottom">
      <div className="menuBottom__section">
        <Link to="/user-panel">
          {home}
          <p className="menuBottom__name">Home</p>
        </Link>
      </div>
      <div className="menuBottom__section">
        <Link
          to="/user-panel#todo"
          onClick={() => {
            actions.openTodo(true);
            window.scrollTo(0, 0);
          }}
        >
          {plusSign}
          <p className="menuBottom__name">new Task</p>
        </Link>
      </div>
      <div className="menuBottom__section">
        <Link to="/contact-us">
          {phone2}
          <p className="menuBottom__name">Contact Us</p>
        </Link>
      </div>
    </nav>
  );
}

export default MenuBottom;
