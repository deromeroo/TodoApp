import React from 'react';
import '../styles/TodoList.css';

export const TodoList = (props) => {
  return (
    <section className='list-container'>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}
