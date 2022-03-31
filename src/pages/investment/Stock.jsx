import React, { useEffect,  useState, useContext } from 'react'
//contextAPI
import {SnackbarContext} from '../../context/SnackbarContext'
// materialUI components
import {Container as MUIContainer,
} from '@mui/material'; //  centers the content horizontally
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

// components
import Navbar from '../../components/navBar/Navbar';
import StockGraph from '../../components/stockGraph/StockGraph'
import StockDailyInfo from '../../components/stockDailyInfo/StockDailyInfo.jsx';
import Footer from '../../components/footer/Footer.jsx';
import MySnackbar from '../../components/snackbar/MySnackbar';

//api
import { getDailyBySymbol } from '../../api';
//data
import {companies} from '../../data/companies';
// utils
import {convertToSymbol} from '../../utils/convertToSymbol';


const Stock = () => {

  const [company, setCompany] = useState('MSFT');
  const [stockData, setStockData] = useState()

  const { showSnackbar } = useContext(SnackbarContext)

  useEffect(()=>{

    getDailyBySymbol(company) // return a promise
    .then((data)=>{
      //console.log(data);
      setStockData(data)

    })
    .catch((err)=>{
      if (err.response) {
        // client received an error response (5xx, 4xx)
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        if(err.response.status === 429){
          showSnackbar(err.response.data.message+'! please try again latter')
        }else{
          showSnackbar('Somthing wen wrong ! please try again latter')
        }
      } else if (err.request) {
        // client never received a response, or request never left
        console.log(err.request);
        showSnackbar('Somthing wen wrong ! please try again latter')
      } else {
        // anything else
        console.log('Error', err.message);
        showSnackbar('Somthing wen wrong ! please try again latter')
      }
      console.log(err.config);
  })
  }, [company])
  console.log(stockData);


  const handleChange = (event) => {
    setCompany(event.target.value);
  };


  return (
    <>
        <Navbar/>
  
        <MUIContainer sx={{  marginTop:'100px'}}>
          <Typography variant='h4' >Stock Tracking</Typography>
              
          <Box sx={{ width:'100%', margin:'30px 0'}}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">select a company</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={company}
                label="company"
                onChange={handleChange}
              >
     
                {companies?.map((c,i)=>(
                  <MenuItem value={convertToSymbol(c)} key={i}>{c}</MenuItem>
                ))}

              </Select>
            </FormControl>
          </Box>

        {stockData && 
            <StockDailyInfo company={company} /> }
        </MUIContainer>

        {stockData && 
          <StockGraph stockData={stockData} company={company} /> }

      <MySnackbar mySeveryity={'warning'}/>
      <Footer/>
    </>
  )
}

export default Stock