import React, { useState } from 'react';

export const useStorageListener = (sync) => {

    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) => {
        if(change.key === 'Todos_V2') {
            console.log('Hubo cambios en todosv2')
            setStorageChange(true);
        }
    })

    const toggleShow = () => {
        sync();
        setStorageChange(false)
    }

    return {
        show: storageChange,
        toggleShow

    };
};