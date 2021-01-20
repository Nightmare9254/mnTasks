import React, { useState } from 'react';
import { CounterSubscriber, useCounter } from '../../store/sub';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../page/Header';
import Footer from '../page/Footer';

const PaymentWrapper = styled.div`
  background: var(--header-color);
  padding: 15px;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  color: #fff;
  transform: translateY(-200%);
`;

const Payments = ({ price }) => {
  const numberReg = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const dateReg = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  const cvcReg = /^[0-9]{3}$/;

  const history = useHistory();
  const [state, actions] = useCounter();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expireDate: '',
    cvc: '',
  });

  const handlerInput = (e) => {
    const target = e.target;
    const value = e.target.value;
    const name = target.name;

    setCardData({ ...cardData, [name]: value });
  };

  const pay = () => {
    if (
      numberReg.test(cardData.cardNumber) &&
      dateReg.test(cardData.expireDate) &&
      cvcReg.test(cardData.cvc)
    ) {
      console.log('ok');

      fetch('/api/payCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: state.count }),
      });
      history.push('/user-panel');
    } else {
      setMessage('Something went wrong. Please check your inputs');
    }
  };

  setTimeout(() => {
    setOpen(true);
  },800)
  return (
    <div>
      <Header/>
      <PaymentWrapper
        className={`${open ? 'aniamtion-payment' : ''}`}
        open={open}
      >
        <div className="exit" onClick={() => setOpen(false)}>
          X
        </div>
        <p>To Do List Payment</p>
        <p>{state.count}$ to pay</p>

        <label>
          <p>Card number: </p>
          <input
            name="cardNumber"
            value={cardData.cardNumber}
            onChange={(e) => handlerInput(e)}
            type="text"
          />
        </label>
        <div className="safe">
          <label>
            <p>Date</p>
            <input
              name="expireDate"
              placeholder="01/10"
              value={cardData.expireDate}
              onChange={(e) => handlerInput(e)}
              type="text"
            />
          </label>
          <label>
            <p>CVC</p>
            <input
              name="cvc"
              placeholder="123"
              value={cardData.cvc}
              onChange={(e) => handlerInput(e)}
              type="text"
            />
          </label>
        </div>

        <button onClick={pay}>Pay Now</button>
        {message.length > 2 && <p>{message}</p>}
      </PaymentWrapper>
      <Footer/>
    </div>
  );
};

export default Payments;
