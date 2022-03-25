import React from 'react'

// materialUI components
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

// styles
import useStyles from './summary.styles'
//custom hook
import useTransactions from '../../utils/useTransactions';

const Summary = ({title}) => {
    const classes = useStyles()

    const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income"?classes.income :classes.expense} style={{margin:"0 5px"}}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Summary