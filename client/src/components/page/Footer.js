import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    fetch('/api/countTasks')
      .then((response) => response.json())
      .then((json) => {
        setTotalTasks(json);
      });
  }, []);

  return (
    <div className="footer">
      <div className="footer__first">
        <p
          style={{
            fontWeight: '700',
            color: ' var(--secondary-grey)',
            marginBottom: '3rem',
            fontSize: '2.2rem',
          }}
        >
          Usefull Links
        </p>
        <div className="footer__nav">
          <p>
            <Link to="/about">About</Link>
          </p>

          <p>
            <Link to="/terms">Terms of service</Link>
          </p>
          <p>
            <Link to="/policy">Privacy policy</Link>
          </p>
          <p>
            <Link to="/contact-us">Contact us</Link>
          </p>
        </div>
      </div>
      <div className="footer__second">
        <p>&copy; 2021 nmTasks. All rights reserved</p>
        <div className="footer__second_first_div">
          <p>Made in quarantine</p>
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M18.254 9.804c1.433-3.5-.412-7.595-4.21-8.79l-.012.442c2.58 1.174 3.542 4.242 2.165 6.627-1.311 2.271-4.241 3.064-6.547 1.775-2.306-1.29-3.113-4.176-1.803-6.446.514-.89 1.278-1.553 2.155-1.952l-.001-.46c-1.578.481-2.98 1.533-3.861 3.058-1.054 1.826-1.131 3.936-.396 5.746-3.754.545-6.411 4.123-5.597 7.935l.396-.209c-.238-2.788 1.997-5.127 4.783-5.127 2.652 0 4.802 2.117 4.802 4.727 0 2.611-2.149 4.728-4.802 4.728-1.04 0-2.002-.327-2.788-.88l-.406.229c1.206 1.111 2.827 1.793 4.609 1.793 2.127 0 4.023-.971 5.259-2.486 1.235 1.515 3.132 2.486 5.259 2.486 1.783 0 3.403-.682 4.608-1.794l-.406-.229c-.786.553-1.748.88-2.788.88-2.652 0-4.802-2.117-4.802-4.728 0-2.61 2.149-4.727 4.802-4.727 2.787 0 5.021 2.339 4.783 5.127l.396.209c.816-3.812-1.843-7.39-5.598-7.934zm-6.254 5.021c-.828 0-1.5-.661-1.5-1.477 0-.815.672-1.477 1.5-1.477s1.5.661 1.5 1.477c0 .816-.672 1.477-1.5 1.477zm0-7.145c-.591 0-1.16.091-1.695.258-.548-.414-.937-1.016-1.059-1.713.856-.327 1.782-.514 2.754-.514s1.898.187 2.754.514c-.122.697-.511 1.299-1.059 1.713-.535-.167-1.104-.258-1.695-.258zm-3.888 9.53c-.022.739-.336 1.405-.837 1.888-1.438-1.122-2.452-2.741-2.779-4.591.671-.205 1.335-.201 2.085.174.273.977.809 1.846 1.531 2.529zm8.609 1.892c-.502-.482-.816-1.147-.841-1.884.729-.685 1.268-1.559 1.541-2.542.741-.37 1.407-.375 2.083-.167-.328 1.852-1.345 3.471-2.783 4.593z" />
            </svg>
          </i>
        </div>
        <p>
          <strong
            style={{
              color: '#4a5568',
              marginRight: '.5rem',
            }}
          >
            {totalTasks.length}
          </strong>
          Users finished tasks
        </p>
      </div>
    </div>
  );
};

export default Footer;
