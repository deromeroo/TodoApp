import React, { useContext, useState } from 'react';
import '../styles/TodoForm.css';
import { TodoContext } from '../TodoContext/TodoContext';

export const TodoForm = () => {

    const { addTodo, setOpenModal } = useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    };
    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    return (
    <form onSubmit={onSubmit}>

        <label className='icon-task'><i class="bi bi-clipboard2-plus-fill"></i></label>

        <label className='new-task'>Write your new task</label>

        <textarea 
            placeholder='Drink water..'
            value={newTodoValue}
            onChange={onChange}
        />

        <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick={onCancel}
            >
                Cancel
            </button>

            <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
            >
            Add
            </button>
        </div>
    </form>
)
}
