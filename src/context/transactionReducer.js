const transactionReducer = (state, action)=>{
    let newTransactions
    switch(action.type){
        case 'DELETE_TRANSACTION':
            newTransactions = state.filter((transaction)=>(transaction.id!==action.payload))
            
            localStorage.setItem('transactions', JSON.stringify(newTransactions));
            
            return newTransactions

        case 'ADD_TRANSACTION':
            newTransactions = [action.payload, ...state];

            localStorage.setItem('transactions', JSON.stringify(newTransactions));
            
            return newTransactions

        default:
            return state;    
    }
}

export default transactionReducer;