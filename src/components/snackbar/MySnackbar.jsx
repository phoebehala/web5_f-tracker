import React, { useState } from 'react';

// contextAPI
import { useContext } from 'react'
import{SnackbarContext}  from '../../context/SnackbarContext'

// materialUI components
import { Alert, Snackbar, IconButton} from '@mui/material'


// styles
import './snackbar.styles'
import { Close } from '@material-ui/icons';


const MySnackbar = () => {

  const {toggleSnackbar, isSnackbarOpen, snackbarMsg} = useContext(SnackbarContext)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    toggleSnackbar(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (

    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      message={'hi'}
      action={action}
    >

      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Snackbar>

  )
}

export default MySnackbar