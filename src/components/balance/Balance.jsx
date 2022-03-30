import React, { useState } from 'react'

// component
import MyProgressBar from './myProgressBar/MyProgressBar.jsx';

// materialUI components
//import { Divider } from '@material-ui/core';
// bootstrap components
//import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import { Card, CardHeader, CardContent, Typography, Divider, Stack, Modal, Box, TextField} from '@mui/material'
import { MyPaper, Mybtn} from './balance.styles.js'
import { SetBugetStyle} from './balance.styles.js'
import { ThemeProvider } from '@mui/material/styles'
import {myThemeV5} from '../../myThemeV5'

// styles
import useStyles from './balance.styles'

// contextAPI
import { useContext } from 'react';
import { FinanceTrackerContext } from '../../context/context';
import { BudgetContext } from '../../context/BudgetContext.js';

//utils
import { currencyFormatter } from '../../utils/formatCurrency';
import useBudget from '../../utils/useBudget.js';
import { height } from '@mui/system';




const Balance = () => {
    const classes = useStyles()
    const {balance, totalExpence} = useContext(FinanceTrackerContext)

    const {budget,setAndsaveBudget} = useContext(BudgetContext)

    const {displayedRatio, shownColor }  = useBudget(budget)
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);
    //console.log({budget});
 
  return (
    <MyPaper elevation={3}   >

      <Stack direction="row" spacing={2} p={2} sx={{justifyContent:'space-between'}}>
        <Typography variant="h5"  >Total Balance</Typography>
        <Typography align="center" variant="h5" color={'var(--main-blue)'} sx={{fontWeight:'bold'}}> {currencyFormatter.format(balance)}</Typography>
      </Stack>

      < Divider/>

      <Stack direction="row" spacing={2} p={2} sx={{justifyContent:'space-between'}}>
        <Typography variant="h5" >Budget</Typography>
        <ThemeProvider theme={myThemeV5}>
          <Mybtn onClick={()=>setIsBudgetOpen(true)}> SET A BUDGET </Mybtn>
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
                  '& > *': { mt: 3, width: '100%', height:'30px' },
                }}>
              <TextField  id="outlined-basic" label="Outlined" variant="outlined" 
                        onChange={(e)=>{setAndsaveBudget( Number(e.target.value) )}}/>

            </Box>
          </Box>
        </Modal>
      </Stack>
  

  
        <Typography align="right" variant="h6" width='95%' mt={3} color={'var(--main-orange)'}>
            {currencyFormatter.format(totalExpence)}
            {budget && (
              <span style={{color:"var(--main-blue)"}}>
                / {currencyFormatter.format(budget)}
              </span>
             )}
          </Typography>
        <MyProgressBar bgcolor={shownColor} completed={(displayedRatio*100).toFixed(0)}/>



    </MyPaper>


  )
}


export default Balance


  