import AppReducer from './AppReducer';
import React, { createContext, useReducer } from 'react';


/// STATE //
const initialState ={
    transactions: [
        {id: 1, text: 'kim jung un', amount: 30},
        {id: 2, text: 'tony blair', amount: 30}
    ]
}

// ((provider)) -- exports the state for global use
export const GlobalContext = createContext(initialState);


// provide components for wrapping
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch ({
        type: 'DELETE_TRANS',
        payload: id
        });
    }
    function addTransaction(transaction){
        dispatch ({
            type: 'ADD_TRANS',
            payload: transaction
        });
    }

    // makes the data & actions  global
    return(
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            { children }
        </GlobalContext.Provider>
        );
};
