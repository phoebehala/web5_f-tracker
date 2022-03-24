import React, { useReducer, createContext } from 'react';
import transactionReducer from './transactionReducer'

const initialState = [
    {   id:1,
        type:"Income",
        category:"Salary",
        amount:1000,
        date:new Date(),
        desc:"get paid"
    },
    {   id:2,
        type:"Expense",
        category:"Food",
        amount:10,
        date:new Date(),
        desc:"lunch"
    },
    {   id:3,
        type:"Expense",
        category:"Bill",
        amount:10,
        date:new Date(),
        desc:"electricity"
    }
];
export const FinanceTrackerContext = createContext(initialState);

export const FinanceTrackerProvider = ({children})=>{

    const [transactions, dispatch] = useReducer(transactionReducer,initialState)

    // Actions Creators
    const deleteTransaction = (id)=>{
        dispatch({type:'DELETE_TRANSACTION', payload:id})
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };
    console.log(transactions);

    return(
        <FinanceTrackerContext.Provider value={{
            transactions:transactions,
            deleteTransaction:deleteTransaction,
            addTransaction:addTransaction
        }}>
            {children}
        </FinanceTrackerContext.Provider>
    )
}