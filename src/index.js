import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// contextAPI
import { FinanceTrackerProvider } from './context/context';
import { SnackbarProvider } from './context/SnackbarContext';
import { BudgetProvider } from './context/BudgetContext';

// style
import'./index.css'
import {myTheme} from './myTheme'

ReactDOM.render(
  <React.StrictMode>

    <FinanceTrackerProvider>
      <BudgetProvider>
        <SnackbarProvider>
          <ThemeProvider theme={myTheme}>
            <App />
          </ThemeProvider>
        </SnackbarProvider>
      </BudgetProvider>
    </FinanceTrackerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


