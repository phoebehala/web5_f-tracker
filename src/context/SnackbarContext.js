import React, { createContext, useReducer } from 'react';
import snackbarReducer from './snackbarReducer';
 
const initialState = {
  isOpen:false,
  msg:''
};
export const SnackbarContext = createContext(initialState);

export const SnackbarProvider = ({children})=>{ 

    const [state, dispatch] = useReducer(snackbarReducer, initialState)
    console.log({state});

    // Actions Creators
    const showSnackbar = (strInput)=>{
      dispatch({type:'SHOW_SNACKBAR', payload:strInput})
    }

    const closeSnackbar = ()=>{
      dispatch({type:'CLOSE_SNACKBAR', payload:''})
    }

    return(
    <SnackbarContext.Provider value={{
        isSnackbarOpen:state.isOpen,
        snackbarMsg:state.msg,
        showSnackbar,
        closeSnackbar
    }}>
        {children}
    </SnackbarContext.Provider>
)
}