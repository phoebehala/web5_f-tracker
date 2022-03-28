import React, { useState } from 'react'

// component
import MyProgressBar from './myProgressBar/MyProgressBar.jsx';

// materialUI components
//import { Divider } from '@material-ui/core';
// bootstrap components
//import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { Card, CardHeader, CardContent, Typography, Divider, Stack, Modal, Box, TextField} from '@mui/material'
import { MyPaper, Mybtn, SetBugetBox} from './balance.styles.js'
import {SetBugetStyle} from './balance.styles.js'
import { ThemeProvider } from '@mui/material/styles'
import {myThemeV5} from '../../myThemeV5'

// styles
import useStyles from './balance.styles'

// contextAPI
import { useContext } from 'react';
import { FinanceTrackerContext } from '../../context/context';


//utils
import { currencyFormatter } from '../../utils/formatCurrency';
import useBudget from '../../utils/useBudget.js';



const Balance = () => {
    const classes = useStyles()
    const {balance, totalExpence} = useContext(FinanceTrackerContext)

    const [budget ,setBudget] = useState('1000')
    const {displayedRatio, shownColor }  = useBudget(budget)
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);
console.log({budget});
  return (
    <MyPaper elevation={3} >
      <Card>
        <CardHeader title="Total Balance" subheader="" />
        <CardContent>
          <Typography align="center" variant="h5"> {currencyFormatter.format(balance)}</Typography>
        </CardContent>

      < Divider/>


      <Stack direction="row" spacing={2}>
        <Typography variant="h5" >Budget</Typography>
        <ThemeProvider theme={myThemeV5}>
          <Mybtn onClick={()=>setIsBudgetOpen(true)}> Set a Budget </Mybtn>
        </ThemeProvider>
        <Modal
        open={isBudgetOpen}
        onClose={()=>setIsBudgetOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={SetBugetStyle}>

          <Stack direction="row" spacing={2} sx={{justifyContent:'space-between'}}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Enter your budget
            </Typography>
            <ThemeProvider theme={myThemeV5}>
              <Mybtn onClick={()=>setIsBudgetOpen(false)}> Done </Mybtn>        
            </ThemeProvider>
          </Stack>

          <Box  component="form"
              sx={{
                  '& > *': { mt: 2, width: '100%', height:'20px' },
              }}>
            <TextField  id="outlined-basic" label="Outlined" variant="outlined" 
                        onChange={(e)=>{setBudget(e.target.value)}}/>

          </Box>
        </Box>
      </Modal>
      </Stack>

        <CardContent>
        <Typography align="right" variant="h6">
            {currencyFormatter.format(totalExpence)}
            {budget && (
              <span style={{color:"red"}}>
                / {currencyFormatter.format(budget)}
              </span>
             )}
          </Typography>
        <MyProgressBar bgcolor={shownColor} completed={(displayedRatio*100).toFixed(0)}/>
      </CardContent>

      </Card>
    </MyPaper>


  )
}


export default Balance


  