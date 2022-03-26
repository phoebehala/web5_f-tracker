import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// contextAPI
import { FinanceTrackerProvider } from './context/context';

// style
import'./index.css'
import {myTheme} from './myTheme'

ReactDOM.render(
  <React.StrictMode>
    <FinanceTrackerProvider>

        <ThemeProvider theme={myTheme}>
          <App />
        </ThemeProvider>

    </FinanceTrackerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


