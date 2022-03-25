// contextAPI
import { useContext } from 'react';
import {FinanceTrackerContext} from '../context/context' 
// data
import {incomeCategories, expenseCategories, resetCategories} from '../data/categories'

const useTransactions = (transactionType) => {
    resetCategories() // set amount to 0 for all cats
    const cats = transactionType==='Income'?incomeCategories :expenseCategories

    const {transactions} = useContext(FinanceTrackerContext)
    const correspondingTransactions = transactions.filter((t)=>t.type === transactionType )

    const total = correspondingTransactions.reduce((accumulator, currentValue) => accumulator += currentValue.amount, 0)                        

    // go thhrough each correspondingTransactions to fine corresponding Cat and accumulate the amount
    correspondingTransactions.forEach((ct)=>{
        const correspondingCat =cats.find((cat)=>cat.name===ct.category)
        if (correspondingCat) correspondingCat.amount+=ct.amount
    })

    // filter out correspondingCats without value
    const filteredCates = cats.filter((cat)=>cat.amount>0)

    // data for chart.js
    const chartData = {
        datasets: [{
          data: filteredCates.map((c) => c.amount),
          backgroundColor: filteredCates.map((c) => c.color),
        }],
        labels: filteredCates.map((c) => c.name),
      };

    return {total, chartData };

};
  
export default useTransactions;