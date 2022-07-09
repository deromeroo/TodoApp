import React from 'react';
import '../styles/TodoItem.css';

export const TodoItem = ({completed, text, onComplete, onDelete}) => {

  return (
    <li className="TodoItem">

      <span 
        className={`Icon ${completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        <i className="bi bi-check-circle-fill"></i>
      </span>

      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>

      <span 
        className="Icon Icon-delete"
        onClick={onDelete}
      >
        <i className="bi bi-trash-fill"></i>
      </span>

    </li>
  )
}
