import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {


    // console.log(key); //'auth'
    // console.log(initialValue); //{}
   
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);
        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);

           return persistedState;
        }

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);
        
        console.log('setLoacalState');
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState,
    ];
};