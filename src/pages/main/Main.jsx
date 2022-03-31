import React, {useState, useEffect} from 'react'

// materialUI components
import {Container as MUIContainer,
        Grid
} from '@mui/material'; //  centers the content horizontally

// components
import TransactionList from '../../components/transactionList/TransactionList'
import Summary from '../../components/summary/Summary'
import Balance from '../../components/balance/Balance'
import AddTransaction from '../../components/addTransaction/AddTransaction'
import Navbar from '../../components/navBar/Navbar';
import MySnackbar from '../../components/snackbar/MySnackbar';
import Footer from '../../components/footer/Footer.jsx';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [isEditMode, setIsEditMode] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState({});
  //console.log(currentTransaction);
  //console.log(isEditMode);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);


  return (   
    <>
    <Navbar/>

    <MUIContainer  sx={{ marginTop:'100px'}}>
   
      <Grid container rowSpacing={3} columnSpacing={{xs:2,md:2}}>   
          <Grid item xs={12} md={6} >
            <Summary title="Income"/>
          </Grid>

          <Grid item xs={12} md={6}>
           <Summary title="Expense"/>
          </Grid>

          <Grid  item xs={12}>
            <Balance/>
          </Grid>
      </Grid>

      <Grid item sm={12} mt={3}>
          <TransactionList setIsEditMode={setIsEditMode}
                           setCurrentTransaction={setCurrentTransaction}
                           setIsModalOpen={setIsModalOpen}/>
      </Grid>

      {isModalOpen &&(
       <AddTransaction isEditMode={isEditMode} 
                       setIsEditMode={setIsEditMode}
                       currentTransaction={currentTransaction}
                       setIsModalOpen={setIsModalOpen}
                       scrollPosition={scrollPosition}/>
      )}

        
    </MUIContainer >  

    <MySnackbar mySeveryity={'success'}/>
      <Footer/>

    </> 
  )
}

export default Main