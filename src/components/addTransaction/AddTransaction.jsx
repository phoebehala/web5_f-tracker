import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// contextAPI
import {FinanceTrackerContext} from '../../context/context'
//styles
import useStyles from './addTransaction.styles'
import {Container} from './addTransaction.styles';
// materialUI components
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import {Box,Stack, Grid, Paper} from '@mui/material'; 
// data 
import {incomeCategories, expenseCategories} from '../../data/categories'
//utils
import formatDate from '../../utils/formatDate'
import { fontSize } from '@mui/system';

const AddTransaction = ({isEditMode, setIsEditMode, currentTransaction, setIsModalOpen}) => {
  const classes = useStyles()

  const initialFormData = {type:'Income', category:'', amount:'' , date:'', desc:''}
  const [formData, setFormData] = useState(initialFormData)

  useEffect(()=>{
     //check if currentTransaction is empty obj
     if(Object.keys(currentTransaction).length!==0){
       setFormData({type:currentTransaction.type, category:currentTransaction.category, amount:currentTransaction.amount , date:currentTransaction.date ,  desc:currentTransaction.desc})
     }
  },[isEditMode,currentTransaction])

  // contextAPI
  //const globalState = useContext(FinanceTrackerContext)
  //console.log( globalState );
  const {addTransaction, editTransaction} = useContext(FinanceTrackerContext)
  const handleCreateTransaction = ()=>{
    //console.log(formData);
    addTransaction( {...formData, amount:Number(formData.amount), id:uuidv4()} )
    setFormData((initialFormData)) // set back to default value
    setIsModalOpen(false)
  }
  const handleEditTransaction = ()=>{
    console.log(formData);
    const currentTransactionId = currentTransaction.id
    console.log(currentTransactionId);
    editTransaction( {...formData, amount:Number(formData.amount), id:currentTransactionId } )
    setFormData((initialFormData))
    setIsModalOpen(false)
  }
  const handleClickCancel =()=>{
    if (isEditMode === true) setIsEditMode(false)
    setIsModalOpen(false)
  }

  const selectedCats = formData.type ==='Income'? incomeCategories :expenseCategories

  return (
    <Paper elevation={3}
          sx={{
            position:'absolute',
            top:0,
            bottom:0,
            right:0,
            left:0,
            margin:"auto",

            padding: '50px',
            width:'300px',
            height:'70vh',

          }}>

        <Grid container spacing={2} >
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
              <Select value={formData.category}  onChange={(e)=>setFormData({ ...formData, category: e.target.value})}>
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

          <Box sx={{ display:'flex',
                     margin:'auto',
                     marginTop:'10px',
                    '& button': { m: 1 } }}>

            <Button className={classes.button} variant="outlined" color="primary" fullWidth 
                    onClick={handleClickCancel}  >
               Cancel
            </Button>
          {isEditMode
            ?(
              <Button className={classes.button} variant="outlined" color="primary" fullWidth 
                      onClick={handleEditTransaction} >
              Update
              </Button>

            ):(

            <Button className={classes.button} variant="outlined" color="primary" fullWidth 
                    onClick={handleCreateTransaction} >
              Create
            </Button>
          )}
          </Box>

        </Grid>

    </Paper>
  )
}

export default AddTransaction