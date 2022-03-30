import React, { createContext, useState } from 'react';
 
export const SnackbarContext = createContext();

export const SnackbarProvider = ({children})=>{ 

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const [snackbarMsg, setSnackbarMsg] = useState('')
  console.log({isSnackbarOpen});
  console.log({snackbarMsg});

    function  toggleSnackbar(booleanValuse) {
      return  setIsSnackbarOpen(booleanValuse)
    }
  
    function  setSnackbarMessage(strInput) {
      return  setSnackbarMsg(strInput)
    }
  
    return(
    <SnackbarContext.Provider value={{
        isSnackbarOpen:isSnackbarOpen,
        snackbarMsg:snackbarMsg,
        toggleSnackbar:toggleSnackbar,
        setSnackbarMessage:setSnackbarMessage
        
    }}>
        {children}
    </SnackbarContext.Provider>
)
}