import '../styles/TodoSearch.css';
import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';

export const TodoSearch = () => {

  const { searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className='search-container'>
      <form>

        <input 
          type='text' 
          className='query-search' 
          placeholder='Search task...'
          value={searchValue}
          onChange={onSearchValueChange}
        />

        <button type='submit' className='btn-search'>
          <i className="bi bi-search"></i>
        </button>

      </form>
    </div>
  )
}
