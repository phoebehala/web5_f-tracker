import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// contextAPI
import {FinanceTrackerContext} from '../../context/context'
//styles
import useStyles from './addTransaction.styles'
// materialUI components
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// data 
import {incomeCategories, expenseCategories} from '../../data/categories'
//utils
import formatDate from '../../utils/formatDate'

const AddTransaction = () => {
  const classes = useStyles()

  const initialFormData = {type:'Income', category:'', amount:'' , date:'', desc:''}
  const [formData, setFormData] = useState(initialFormData)

  // contextAPI
  //const globalState = useContext(FinanceTrackerContext)
  //console.log( globalState );
  const {addTransaction} = useContext(FinanceTrackerContext)
  const handleCreateTransaction = ()=>{
    console.log(formData);
    addTransaction( {...formData, amount:Number(formData.amount), id:uuidv4()} )
    setFormData((initialFormData))
  }

  const selectedCats = formData.type ==='Income'? incomeCategories :expenseCategories

  return (
    <Grid container spacing={2}>
   
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e)=>setFormData({ ...formData, type: e.target.value})}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.cat}  onChange={(e)=>setFormData({ ...formData, category: e.target.value})}>
            {selectedCats.map((cat)=>(
              <MenuItem key={cat.name} value={cat.name}>{cat.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField type="number" label="Amount" value={formData.amount} fullWidth 
                    onChange={(e)=>setFormData({ ...formData, amount:e.target.value})}/>
      </Grid>
      
      <Grid item xs={12}>
        <TextField label="Date" type="date" value={formData.date} fullWidth 
                    onChange={(e)=>setFormData({ ...formData, date:formatDate(e.target.value)})}/>
      </Grid>

      <Grid item xs={12}>
        <TextField type="text" label="Note"  value={formData.desc} fullWidth  
                    onChange={(e)=>setFormData({ ...formData, desc:e.target.value})}/>
      </Grid>


      <Button className={classes.button} variant="outlined" color="primary" fullWidth 
              onClick={handleCreateTransaction} >
        Create
      </Button>

    </Grid>
  )
}

export default AddTransaction