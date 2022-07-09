import React from 'react';
import '../styles/CreateTodoButton.css';

export const CreateTodoButton = ({
  openModal,
  setOpenModal
}) => {

  const onClickBtn = () => {
    setOpenModal(!openModal);
  };


  return (
    <button 
      className="CreateTodoButton"
      onClick={ onClickBtn }
    >
      <i className="bi bi-plus-lg"></i>
    </button>
  )
}
