import React from 'react';
import '../../styles/ui/AlertTask.css'

export const NoResults = ({searchValue}) => {
  return (
    <div className='alert-task'>
        <p>No results found for: {searchValue}</p>

        <button>
            <i className="bi bi-question-circle"></i>
        </button>
    </div>
  )
}
