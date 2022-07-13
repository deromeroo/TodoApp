import React from 'react';
import '../styles/TodoCounter.css';

export const TodoCounter = ({completedTodos, totalTodos, loading}) => {

  return (
    <>
      <h1 className='header'>Your Tasks</h1> 
      <h2 
        className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}
      >
        Completed <span> {completedTodos} </span> to <span> {totalTodos} </span>
      </h2>
    </>
  )
}
