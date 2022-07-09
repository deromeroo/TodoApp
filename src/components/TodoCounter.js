import React, { useContext } from 'react';
import '../styles/TodoCounter.css';
import { TodoContext } from '../TodoContext/TodoContext';

export const TodoCounter = () => {

  const {totalTodos, completedTodos} = useContext(TodoContext);

  return (
    <>
      <h1 className='header'>Your Tasks</h1> 
      <h2 className='TodoCounter'> Completed <span> {completedTodos} </span> to <span> {totalTodos} </span></h2>
    </>
  )
}
