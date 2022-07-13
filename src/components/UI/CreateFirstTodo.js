import React from 'react';
import '../../styles/ui/AlertTask.css';

export const CreateFirstTodo = ({openModal, setOpenModal}) => {

  const onClickBtn = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className='alert-task'>
        <p>Create your first task</p>
        <button
          onClick={ onClickBtn }
        >
            <i className="bi bi-plus-circle-fill"></i>
        </button>
    </div>
  )
}
