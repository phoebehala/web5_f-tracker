import React from 'react'

// materialUI components
//import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Paper, Card, CardHeader, CardContent, Typography} from "@mui/material";
import { Doughnut } from 'react-chartjs-2';

// styles
import useStyles from './summary.styles'
//custom hook
import useTransactions from '../../utils/useTransactions';
//utils
import { currencyFormatter } from '../../utils/formatCurrency';

const Summary = ({title}) => {
    const classes = useStyles()

    const { total, chartData } = useTransactions(title);

  return (
    <Paper elevation={3} className="summary-paper">
      <Card style={{margin:"0 5px"}}>
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5"  className={title === "Income"?classes.income :classes.expense}>{currencyFormatter.format(total)}</Typography>
         <Doughnut data={chartData} />
        </CardContent>
      </Card>
    </Paper>

  )
}

export default Summary