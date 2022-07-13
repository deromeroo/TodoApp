import { useEffect, useState } from 'react';

export const useLocaleStorage = (itemName, initValue) => {

  
  const [synchronizedItem, setSynchronizedItem] = useState(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(initValue);

  useEffect( () => {
    setTimeout(() => {
      
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
          
        if( !localStorageItem ) {
          localStorage.setItem( itemName , JSON.stringify(initValue) );
          parsedItem = [];
        }else {
          parsedItem = JSON.parse(localStorageItem);
        };
  
        setItem(parsedItem);
        setLoading(false);
        setSynchronizedItem(true)
      } catch (error) {
        setError(error);
      };

    }, 3000);
  }, [synchronizedItem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName , stringifiedTodos);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const synchronizeItem = () => {
    setLoading(true);
    setSynchronizedItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    synchronizeItem
  };
}
