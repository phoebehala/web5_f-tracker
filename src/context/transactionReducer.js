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
        
        case 'EDIT_TRANSACTION':

            // find the one corresponding to the one a user wants to edit
            const targetTransaction = state.find((transaction)=>transaction.id===action.payload.id)
            //console.log(targetTransaction);

            // copy all updated formData and add the original id
            const updatedTargetTransaction ={ ...action.payload, id:targetTransaction.id}
            //console.log(updatedTargetTransaction);

            // filter out the original corresponding transaction
            const TransactionsWithoutTargetTransaction = state.filter((transaction)=>transaction.id!==action.payload.id)
            // add updated transaction
            newTransactions = [updatedTargetTransaction, ...TransactionsWithoutTargetTransaction];
            //console.log(newTransactions);

            localStorage.setItem('transactions', JSON.stringify(newTransactions));
                
            return newTransactions



        default:
            return state;    
    }
}

export default transactionReducer;