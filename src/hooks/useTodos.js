import { useState } from 'react';
import { useLocaleStorage } from './useLocaleStorage';


export const useTodos = () => {

  const {
      item: todos, 
      saveItem: saveTodos, 
      loading,
      error,
      synchronizeItem: sincronizeTodos,
    } = useLocaleStorage('Todos_V2', []);
  
    const [ searchValue, setSearchValue ] = useState('');

    const [openModal, setOpenModal] = useState(false);
  
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if(!searchValue.length >= 1) {
      searchedTodos = todos;
    } else {
      searchedTodos = todos.filter( todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
  
        return todoText.includes(searchText);
      });
    };
  
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text
      })
      saveTodos(newTodos);
    };

    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
  
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
    };
  
    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    sincronizeTodos
  };
  
}
