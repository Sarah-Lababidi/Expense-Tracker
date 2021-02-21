import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    transactions: [{
        id: 0,
        text: "books",
        amount: -100.0
    },
    {
        id: 1,
        text: "food",
        amount: -200.0
    },
    {
        id: 2,
        text: "salary",
        amount: 500.0
    }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return (
    < GlobalContext.Provider value={
        {
            transactions: state.transactions,
            addTransaction,
            deleteTransaction
        }
    } >
         { children}
          </GlobalContext.Provider>
    );
}