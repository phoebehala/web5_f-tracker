const snackbarReducer = (state, action)=>{

    switch(action.type){
        case 'SHOW_SNACKBAR':
            return {
                isOpen: true,
                msg: action.payload
            }

        case 'CLOSE_SNACKBAR':
            return {
                isOpen: false,
                msg:''
            }
        


        default:
            return state;    
    }
}

export default snackbarReducer;