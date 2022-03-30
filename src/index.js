import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// contextAPI
import { FinanceTrackerProvider } from './context/context';
import { SnackbarProvider } from './context/SnackbarContext';

// style
import'./index.css'
import {myTheme} from './myTheme'

ReactDOM.render(
  <React.StrictMode>
    <FinanceTrackerProvider>
      <SnackbarProvider>
        <ThemeProvider theme={myTheme}>
          <App />
        </ThemeProvider>
      </SnackbarProvider>

    </FinanceTrackerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


