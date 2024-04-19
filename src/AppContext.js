import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState();
    const [inputValue, setInputValue] = useState('');

    // Functions to be defined here

    return (
        <AppContext.Provider value={{ state, setState, inputValue, setInputValue }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
