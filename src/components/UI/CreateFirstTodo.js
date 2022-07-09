import React, { useContext } from 'react';
import '../../styles/ui/AlertTask.css';
import { TodoContext } from '../../TodoContext/TodoContext';

export const CreateFirstTodo = () => {

  const {openModal, setOpenModal} = useContext(TodoContext);

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
