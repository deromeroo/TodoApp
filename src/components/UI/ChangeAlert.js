import React from 'react';
import { useStorageListener } from '../../hooks/useStorageListener';
import '../../styles/ui/ChangeAlert.css';

export const ChangeAlert = ({sync}) => {

    const { show, toggleShow} = useStorageListener(sync);

    if(show) {
        return (
            <section className='change-alert--container'>
                <div className='change-alert'>
                    
                    <i className="bi bi-exclamation-circle-fill"></i>

                    <p>Something Changed!</p>

                    <span>You modified the task list in another browser tab or window!</span>

                    <button
                        onClick={ () => toggleShow(false) }
                    >
                    Reload Tasks  
                    </button>

                </div>
            </section>
        )
    } else {
        return null;
    };
};