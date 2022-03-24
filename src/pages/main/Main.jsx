import React from 'react'

// materialUI components
import { Box, Grid } from '@material-ui/core'

// components
import TransactionList from '../../components/transactionList/TransactionList'
import Summary from '../../components/summary/Summary'
import Balance from '../../components/balance/Balance'



const Main = () => {
  return (    
    <Box style={{ height: '100vh'}}>
      <Grid container>   {/* rowSpacing={5} columnSpacing={{xs:3, sm:2}} doesn't work */}
        <Grid item xs={12} sm={4} >
          <Summary title="Income"/>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Summary title="Expense"/>
        </Grid>

        <Grid  item xs={12} sm={4}>
          <Balance/>
        </Grid>
      </Grid>

      <Grid xs={12} sm={12}>
          <TransactionList/>
      </Grid>

    </Box >

  )
}

export default Main