import React from 'react'

// materialUI components
import { Card, CardHeader, CardContent, Typography, Divider } from '@material-ui/core';
// bootstrap components
//import { Button, Card, ProgressBar, Stack } from "react-bootstrap"
import {  ProgressBar } from "react-bootstrap"

// styles
import useStyles from './balance.styles'

// contextAPI
import { useContext } from 'react';
import { FinanceTrackerContext } from '../../context/context';

//utils
import { currencyFormatter } from '../../utils/formatCurrency';


const Balance = () => {
    const classes = useStyles()
    const {balance} = useContext(FinanceTrackerContext)

  return (
    <Card className={classes.root}>
        
      <CardHeader title="Expense Tracker" subheader="Total Balance" />
        <ProgressBar
            className="rounded-pill"
            style={{height:"10px"}}
            variant={getProgressBarVariant(1000, 2000)}
            min={0}
            max={2000}
            now={1000}
          />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance {currencyFormatter.format(balance)}</Typography>
      </CardContent>

      <Divider className={classes.divider} />

      <CardHeader title="Expense Tracker" subheader="Budget" />
      <CardContent >

      </CardContent>
    </Card>

        /*
    <Card >
    <Card.Body>
      <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
   title
      </Card.Title>
   
        <ProgressBar
        className="rounded-pill"

        />
  

    </Card.Body>
  </Card>
  */

  )
}


export default Balance

function getProgressBarVariant(amount, max) {
    const ratio = amount / max
    if (ratio < 0.5) return "primary"
    if (ratio < 0.75) return "warning"
    return "danger"
  }
  