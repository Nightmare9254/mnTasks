import { useCounter } from '../../store/sub';
import React from 'react';
import Task from '../todo/Task';
import Todo from '../todo/Todo';
import Footer from '../page/Footer';
import styled from 'styled-components';

const StyledDiv = styled.div`
  filter: ${({ open }) => (open ? 'blur(3px)' : 'blur(0)')};
  background: ${({ open }) => (open ? 'rgb(235, 235, 235)' : '#fff')};
  padding: 1rem;
  height: auto;
`;

const UserTodos = ({ tasks, onAdd, show }) => {
  const [state, actions] = useCounter();

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let date = new Date();
  let dayName = days[date.getDay()];
  let month = monthNames[date.getMonth()];
  let dayOfWeek = date.getDate();

  const newItems = tasks.filter((item) => item.complete !== 'Completed');

  return (
    <div className="center">
      <div
        onClick={() => {
          if (state.newTodo) {
            actions.openTodo(false);
          }
        }}
      >
        <StyledDiv open={state.newTodo} className="tasks">
          <div className="tasks__date">
            <h3>
              Today is <span>{`${dayName} ${dayOfWeek} ${month}`}</span>
            </h3>
            {tasks && (
              <p style={{ marginBottom: '2rem' }}>
                All tasks:
                <span className="task__total">{newItems.length}</span>
                <p style={{ fontSize: '22px', marginTop: '2rem' }}>
                  Current tasks
                </p>
              </p>
            )}
          </div>
          <div className="containter__tasks">
            {newItems
              .reverse()
              .map(
                ({
                  _id,
                  name,
                  description,
                  priority,
                  date,
                  complete,
                  input,
                }) => (
                  <Task
                    id={_id}
                    key={_id}
                    name={name}
                    desc={description}
                    prio={priority}
                    date={date}
                    status={complete}
                    input={true}
                    onAdd={onAdd}
                  />
                )
              )}
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => {
                actions.openTodo(true);
                window.scrollTo(0, 0);
              }}
              className="btn-tasks-new"
              style={{
                display: 'inline-block',
                color: '#1db95e',
                textDecoration: 'none',
                fontSize: '1.7rem',
                background: 'transparent',
              }}
            >
              Add task
            </button>
          </div>

          <Footer />
        </StyledDiv>
      </div>
      {state.newTodo && <Todo onAdd={onAdd} />}
    </div>
  );
};

export default UserTodos;
