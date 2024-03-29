import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { next } from '../Hamburger/HamburgerIcons';
import how1 from '../../img/how1.png';
import how2 from '../../img/how2.png';
import how3 from '../../img/how3.png';
import how4 from '../../img/how4.png';
import how5 from '../../img/how5.png';
import how6 from '../../img/how6.png';
import how7 from '../../img/how7.png';

const HoWorks = () => {
  const [nextA, setNextA] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const howImgs = [how1, how2, how3, how5, how6, how7, how4];
  const textImg = [
    'Create a free account',
    'Quickly add new tasks',
    'Simple search',
    'Contact us anytime',
    'Everything is recorded ',
    'Plenty purchase plans',
    'Many payments methods',
  ];

  return (
    <main className="how__main">
      <h2 className="how__header">How it works</h2>

      <div className="how__ContentWrapper">
        <div style={{ width: '100%' }}>
          <Link
            style={{ margin: '2rem', position: 'relative', zIndex: '3' }}
            to="/"
          >
            <i>
              <svg
                width="40"
                height="40"
                viewBox="0 0 49 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="backArrow"
              >
                <circle
                  cx="24.0475"
                  cy="24.0475"
                  r="23.0475"
                  stroke="#f7fafc"
                  strokeWidth="3"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.344 25.55L24.56 33.4523L23.202 35L11 24.5L23.224 14L24.556 15.5813L15.348 23.45H39V25.55H15.344Z"
                  fill="#f7fafc"
                />
              </svg>
            </i>
          </Link>
        </div>
        <span className="how__index ">
          <div className="how__works__div how__works__border__div">
            <div className="how__works__div how__works__background__div">
              <span
                style={{ color: 'var(--main-color-green)', fontSize: '2rem' }}
              >
                {imgIndex + 1}
              </span>
            </div>
          </div>
        </span>
        <div className="how__imgWrapper">
          <p className="how__paragraph"> {textImg[imgIndex]}</p>
          <div className={`${nextA ? 'how__imgWrapper__animation' : ''}`}>
            <img
              className="how__img"
              src={howImgs[imgIndex]}
              alt={howImgs[imgIndex]}
            />
          </div>
        </div>
        <i
          className="container__next-how-works"
          style={{
            position: 'absolute',
            right: '3%',
            bottom: '1%',
          }}
          className={`${nextA ? 'blockClick' : ''}`}
          onClick={() => {
            setImgIndex(imgIndex + 1);
            setNextA(true);
            setTimeout(() => {
              setNextA(false);
            }, 1000);
            if (imgIndex === howImgs.length - 1) {
              setImgIndex(0);
            }
          }}
        >
          {next}
        </i>
      </div>
    </main>
  );
};

export default HoWorks;
