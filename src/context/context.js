import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":500,"category":"Pets","type":"Expense","date":"2022-03-07","id":"b9bed60d-9a21-440f-8a1e-752dae7c50b8"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action creators
    const deleteTransaction = (id) => {
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }

    const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

    return (
        <ExpenseTrackerContext.Provider value={{ 
            deleteTransaction, 
            addTransaction,
            transactions,
            balance
         }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
}