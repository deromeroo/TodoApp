import './styles/App.css';
import React from 'react';
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
import { useTodos } from './hooks/useTodos';
import { NoResults } from './components/UI/NoResults';
import { ChangeAlert } from './components/UI/ChangeAlert';

function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos
  } = useTodos();

  const now = Date.now();
  const date = new Date(now);
  const today = date.toDateString();


  return (
    <>
        <TodoCounter 
            totalTodos = {totalTodos} 
            completedTodos = {completedTodos}
            loading={loading}
        />

        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            loading={loading}
        />

        <p className='date'>{today}</p>

        <TodoList 
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          onError={() => <Error />}
          onNoResults={() => <NoResults searchValue={searchValue} />}
          onLoading={() => <Loading />}
          onFirstTodo={() => 
            <CreateFirstTodo 
                openModal={openModal} 
                setOpenModal={setOpenModal}
          />}
          render= {todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
        )}

        />

        {!!openModal && (
            <Modal>
                <TodoForm 
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        )}

        <CreateTodoButton 
            openModal={openModal}
            setOpenModal={setOpenModal}
        />

        <ChangeAlert sync={sincronizeTodos} />
    </>
  );
}

export default App;
