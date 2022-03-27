import React, {useState} from 'react'

// materialUI components
import {Container as MUIContainer,
        Grid
} from '@mui/material'; //  centers the content horizontally

// components
import TransactionList from '../../components/transactionList/TransactionList'
import Summary from '../../components/summary/Summary'
import Balance from '../../components/balance/Balance'
import AddTransaction from '../../components/addTransaction/AddTransaction'

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [isEditMode, setIsEditMode] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState({});
  //console.log(currentTransaction);
  //console.log(isEditMode);

  return (    
    <MUIContainer>
      <Grid container rowSpacing={3} columnSpacing={{sm:2}}>   
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

      <Grid  sm={12}>
          <TransactionList setIsEditMode={setIsEditMode}
                           setCurrentTransaction={setCurrentTransaction}
                           setIsModalOpen={setIsModalOpen}/>
      </Grid>

      {isModalOpen &&(
       <AddTransaction isEditMode={isEditMode} 
                       currentTransaction={currentTransaction}
                       setIsModalOpen={setIsModalOpen}/>
      )}

    </MUIContainer >  


  )
}

export default Main