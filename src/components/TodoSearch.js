import '../styles/TodoSearch.css';
import React from 'react';

export const TodoSearch = ({searchValue, setSearchValue, loading}) => {

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
          disabled={loading}
        />

        <button type='submit' className='btn-search'>
          <i className="bi bi-search"></i>
        </button>

      </form>


    </div>
  )
}
