import React from 'react'

// materialUI components
import { Stack, Typography} from '@mui/material'
import { Doughnut } from 'react-chartjs-2';

// styles
import useStyles from './summary.styles';
import './summary.styles';
import {MyPaper} from './summary.styles'

//custom hook
import useTransactions from '../../utils/useTransactions';

//utils
import { currencyFormatter } from '../../utils/formatCurrency';

const Summary = ({title}) => {
    const classes = useStyles()

    const { total, chartData } = useTransactions(title);

  return (

    <MyPaper elevation={3} className="summary-paper">
      <Stack direction="row" spacing={2}>
        <Typography variant="h5" >{title}</Typography>
        <Typography variant="h5"  className={title === "Income"?classes.income :classes.expense}>{currencyFormatter.format(total)}</Typography>
      </Stack>
      <Doughnut data={chartData} />
    </MyPaper>

  )
}

export default Summary