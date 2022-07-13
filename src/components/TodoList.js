import React from 'react';
import '../styles/TodoList.css';

export const TodoList = (props) => {
  
  return (
    <section className='list-container'>

      {/* <div className={`filter-todos ${!!props.loading && 'filter-todos--loading' } `}>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </div> */}

      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onFirstTodo()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onNoResults() }

      { (!props.loading && !props.error) && props.searchedTodos.map( todo => props.render(todo) )}


      <ul>
        {props.children}
      </ul>

    </section>
  )
}
