import React, {useEffect, useState} from 'react';
// contextAPI
import { useContext } from 'react';
import {FinanceTrackerContext} from '../../context/context'
// materialUI components
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
// icons
import { Cancel, Delete, Edit, MoneyOff, SearchOutlined  } from '@material-ui/icons';

// styles
import useStyles from './transactionList.styles';
import './transactionList.css'

const TransactionList = ({setIsEditMode,  setCurrentTransaction}) => {
    const classes = useStyles();

    const {transactions, deleteTransaction} = useContext(FinanceTrackerContext)
    //console.log(transactions);
    //console.log(searchedTransactions);

    const [displayTransactions, setDisplayTransactions] = useState(transactions)

    const [query, setQuery] = useState('');
  
    useEffect(()=>{
        if(query.length>0){
            const filteredTransactionsAsPerCat = transactions?.filter((transaction)=>transaction.category.toLowerCase().includes(query.toLowerCase()) )
            const filteredTransactionsAsPerdesc = transactions?.filter((transaction)=>transaction.desc.toLowerCase().includes(query.toLowerCase()) )
            
            console.log({filteredTransactionsAsPerCat});
            console.log({filteredTransactionsAsPerdesc});
            // intersection
           const intersectionTransactions = filteredTransactionsAsPerCat.filter(n => !filteredTransactionsAsPerdesc.some(n2 => n.id == n2.id));
            // union
            const unionTransactions =filteredTransactionsAsPerCat.concat(filteredTransactionsAsPerdesc)
            console.log({unionTransactions});
            setDisplayTransactions(unionTransactions)
        }else{
            setDisplayTransactions(transactions)
        }
    },[query])
    console.log(query);


    const handleSearchInput = (queryInput)=>{
        setQuery(queryInput);
    }

    const handleCancelSearch = ()=>{
        setQuery('');
    }

    const handleEditTransaction = (selectedId)=>{
        // open addTransaction(isEditMode) and pass id to it
        setIsEditMode(true)
        const selectedTransaction =transactions.find((transaction)=>transaction.id===selectedId)
        console.log(selectedTransaction);
        setCurrentTransaction(selectedTransaction)
    
    }


    return (
        <MUIList dense={false} className={classes.list}>

            <div className='SearchWrapper'>
                <div className='IconWrapper'>
                    <SearchOutlined />
                </div>
                <input className='SearchInput'
                       placeholder="Search…" 
                       value={query}
                       onChange={(e) => handleSearchInput(e.target.value)} />

                <Cancel onClick={handleCancelSearch }/>
            </div>

        {displayTransactions.map((transaction) => (
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