import React, { useReducer, createContext } from 'react';
import transactionReducer from './transactionReducer';

const initialState = 
    JSON.parse(localStorage.getItem('transactions')) ||
    [
        { id:'efbad900-09bd-497d-bbc5-190b19944b68', type:"Income", category:"Salary", amount:5000, date:'2022-03-04', desc:"get paid"},
        { id:'a625c9a6-ae63-4d65-bcc0-d8344c796629', type:"Income", category:"Lottery", amount:100, date:'2022-03-10', desc:"lucky"},
        { id:'0bb91984-2baa-4768-8e8a-7246c3b4e024', type:"Expense", category:"Food", amount:50, date:'2022-03-05', desc:"supermarket"},
        { id:'cec3301b-2616-4c08-9cd1-3b5091e135bb', type:"Expense", category:"Bills", amount:100, date:'2022-03-07', desc:"electricity"},
        { id:'ef768f9b-96ce-4415-b63c-00b20604c2dc', type:"Expense", category:"Traffic", amount:100, date:'2022-03-21', desc:"compass card"},
        { id:'63dd2d1e-a2c7-4e3e-bdf9-de31a785bba5', type:"Expense", category:"moive", amount:50, date:'2022-03-27', desc:"movie"},
        { id:'c25a3b3e-bca5-4d9b-8185-530c1f9e0c54', type:"Interest", category:"Salary", amount:10, date:'2022-03-31', desc:"from banck accont"},
    ];
export const FinanceTrackerContext = createContext(initialState);

export const FinanceTrackerProvider = ({children})=>{

    const [transactions, dispatch] = useReducer(transactionReducer,initialState)
    const balance = transactions.reduce((accumulator, currentValue) =>{
        return(currentValue.type === 'Expense'? accumulator-currentValue.amount : accumulator+currentValue.amount)
    }, 0)
    const totalExpence = transactions.reduce((accumulator, currentValue) =>{
        return(currentValue.type === 'Expense'?  accumulator += currentValue.amount: accumulator += 0)
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
            totalExpence:totalExpence,
            deleteTransaction:deleteTransaction,
            addTransaction:addTransaction,
            editTransaction:editTransaction,

        }}>
            {children}
        </FinanceTrackerContext.Provider>
    )
}