import React, { useContext } from 'react';
import { CreateTodoButton } from './components/CreateTodoButton';
import { Modal } from './components/Modal';
import { TodoCounter } from './components/TodoCounter';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { CreateFirstTodo } from './components/UI/CreateFirstTodo';
import { Error } from './components/UI/Error';
import { Loading } from './components/UI/Loading';
import { TodoContext } from './TodoContext/TodoContext';

const now = Date.now();
const date = new Date(now);
const today = date.toDateString();

export const AppUI = () => {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        <>
            <TodoCounter />

            <TodoSearch />

            <p className='date'>{today}</p>

            <TodoList>
                {error && <Error />}
                {loading && <Loading />}
                {(!loading && !searchedTodos.length) && <CreateFirstTodo/>}

                {searchedTodos.map(todo => (
                    <TodoItem 
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton 
                openModal={openModal}
                setOpenModal={setOpenModal}
            />
        </>
    )
}
