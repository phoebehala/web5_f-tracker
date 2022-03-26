import React, { useReducer, createContext } from 'react';
import transactionReducer from './transactionReducer';

const initialState = 
    JSON.parse(localStorage.getItem('transactions')) ||
    [
        { id:'efbad900-09bd-497d-bbc5-190b19944b68', type:"Income", category:"Salary", amount:5000, date:'2022-03-04', desc:"get paid"},
        { id:'0bb91984-2baa-4768-8e8a-7246c3b4e024', type:"Expense", category:"Food", amount:50, date:'2022-03-05', desc:"supermarket"},
        { id:'cec3301b-2616-4c08-9cd1-3b5091e135bb', type:"Expense", category:"Bills", amount:100, date:'2022-03-07', desc:"electricity"}
    ];
export const FinanceTrackerContext = createContext(initialState);

export const FinanceTrackerProvider = ({children})=>{

    const [transactions, dispatch] = useReducer(transactionReducer,initialState)
    const balance = transactions.reduce((accumulator, currentValue) =>{
        return(currentValue.type === 'Expense'? accumulator-currentValue.amount : accumulator+currentValue.amount)
    }, 0)
   
    // Actions Creators
    const deleteTransaction = (id)=>{
        dispatch({type:'DELETE_TRANSACTION', payload:id})
    }

    const addTransaction = (transaction) => {
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    };

    const editTransaction = (transaction)=>{
        dispatch({type:'EDIT_TRANSACTION', payload:transaction})
    }

    console.log(transactions);



    return(
        <FinanceTrackerContext.Provider value={{
            transactions:transactions,
            balance:balance,
            deleteTransaction:deleteTransaction,
            addTransaction:addTransaction,
            editTransaction:editTransaction,

        }}>
            {children}
        </FinanceTrackerContext.Provider>
    )
}