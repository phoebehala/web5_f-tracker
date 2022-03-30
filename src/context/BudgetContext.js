import React, { createContext, useState } from 'react';
 
const initialState = JSON.parse(localStorage.getItem('budget')) || 1000

    
export const BudgetContext = createContext( initialState );

export const BudgetProvider = ({children})=>{ 

    const [budget, setBudget] = useState(initialState)
    console.log({budget});


    function  setAndsaveBudget(inputValue) {
      localStorage.setItem('budget', JSON.stringify(inputValue));
      return  setBudget(inputValue)
    }

  
    return(
    <BudgetContext.Provider value={{
        budget:budget,
        setAndsaveBudget:setAndsaveBudget,
    }}>
        {children}
    </BudgetContext.Provider>
)
}