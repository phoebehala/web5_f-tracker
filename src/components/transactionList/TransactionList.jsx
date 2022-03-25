import React from 'react';
// contextAPI
import { useContext } from 'react';
import {FinanceTrackerContext} from '../../context/context'
// materialUI components
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
// icons
import { Delete, Edit, MoneyOff } from '@material-ui/icons';

// styles
import useStyles from './transactionList.styles';

const TransactionList = ({setIsEditMode,  setCurrentTransaction}) => {
    const classes = useStyles();

    const {transactions, deleteTransaction} = useContext(FinanceTrackerContext)
    //console.log(transactions);

    const handleEditTransaction = (selectedId)=>{
        // open addTransaction(isEditMode) and pass id to it
        setIsEditMode(true)
        const selectedTransaction =transactions.find((transaction)=>transaction.id===selectedId)
        console.log(selectedTransaction);
        setCurrentTransaction(selectedTransaction)
    
    }

    return (
        <MUIList dense={false} className={classes.list}>

            {transactions.map((transaction) => (
            <Slide key={transaction.id} direction="down" in mountOnEnter unmountOnExit>
                <ListItem >
                    <ListItemAvatar  >
                        <Avatar  className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                            <MoneyOff />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText  primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.desc}- ${transaction.date}`}/>
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" 
                                    onClick={()=>handleEditTransaction(transaction.id)}>
                            <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" 
                                    onClick={()=>deleteTransaction(transaction.id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </Slide>
            ))}

        </MUIList>

    )
}

export default TransactionList