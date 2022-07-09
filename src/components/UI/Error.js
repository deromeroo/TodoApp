import React from 'react';
import '../../styles/ui/AlertTask.css'

export const Error = () => {
  return (
    <div className='alert-task'>
        <p>Something was wrong</p>

        <button>
            <i class="bi bi-exclamation-circle-fill"></i>
        </button>
    </div>
  )
}
