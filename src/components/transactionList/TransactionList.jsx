import React, {useEffect, useState} from 'react';
// contextAPI
import { useContext } from 'react';
import {FinanceTrackerContext} from '../../context/context'
// materialUI components
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide, Button,
         Box} from '@material-ui/core';
import {Grid } from '@mui/material'

// icons
import { Cancel, Delete, Edit, MoneyOff, SearchOutlined  } from '@material-ui/icons';

// styles
import useStyles from './transactionList.styles';
import './transactionList.css'
import { Container, Top, StickyTop, ListItemsWarper, MyItem, MyHeadGrid, MyItemGrid} from './transactionList.styles';


const TransactionList = ({setIsEditMode,  setCurrentTransaction, setIsModalOpen}) => {
    const classes = useStyles();

    const {transactions, deleteTransaction} = useContext(FinanceTrackerContext)
    //console.log(transactions);
    //console.log(searchedTransactions);

    const [displayTransactions, setDisplayTransactions] = useState(transactions)
    console.log({displayTransactions});

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
            setDisplayTransactions(filteredTransactionsAsPerCat)
        }else{
            setDisplayTransactions(transactions)
        }
    },[query, transactions])
    console.log(query);


    const handleSearchInput = (queryInput)=>{
        setQuery(queryInput);
    }

    const handleCancelSearch = ()=>{
        setQuery('');
    }

    const handleEditTransaction = (selectedId)=>{
        // open addTransaction(isEditMode) and pass id to it
        setIsModalOpen(true)
        setIsEditMode(true)
        const selectedTransaction =transactions.find((transaction)=>transaction.id===selectedId)
        console.log(selectedTransaction);
        setCurrentTransaction(selectedTransaction)
    
    }


    return (
        <Container>

            <StickyTop>
                <Top>
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

                    <div className='btnWrapper'>
                        <Button variant="contained"
                                className={classes.btn}
                                onClick={()=>setIsModalOpen(true)}>
                            Create a Transaction
                        </Button>
                    </div>             
                </Top>

                <MyHeadGrid container item xs={12}>
                    <Grid item xs={1}> Type </Grid>

                    <Grid item xs={2}> Category</Grid>
                    <Grid item xs={2}> Date </Grid>   
                    <Grid item xs={2}> Amount</Grid>

                    <Grid item xs={3}> Note </Grid>
                </MyHeadGrid>

            </StickyTop>

            <ListItemsWarper>
                {displayTransactions.map((transaction, index) => (
                <Slide key={transaction.id} direction="down" in mountOnEnter unmountOnExit>
                    <Grid  container item xs={12} key={index} rowSpacing={1}>
                        <Grid item xs={1}>
                            <Avatar  className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}
                                     style={{ margin:"auto"}}>
                                <MoneyOff />
                            </Avatar>     
                        </Grid>
                     
                        <Grid item xs={2}>
                            <MyItem variant='h5'>{transaction.category}</MyItem>
                        </Grid>
                        <MyItemGrid  item xs={2}>{transaction.date}</MyItemGrid >   
                        <MyItemGrid item xs={2} className={classes.amount}>${transaction.amount}</MyItemGrid>

                        <Grid  item xs={3} className={classes.desc}>{transaction.desc}</Grid >
                        <Grid  item xs={2} className={classes.icons} >
                            <IconButton edge="end" aria-label="delete" 
                                    onClick={()=>handleEditTransaction(transaction.id)}>
                            <Edit />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" 
                                    onClick={()=>deleteTransaction(transaction.id)}>
                            <Delete />
                        </IconButton>
                        
                        </Grid>
                    </Grid>
                </Slide>
                ))}

            </ListItemsWarper>
                

        </Container>

    )
}

export default TransactionList