import React, { useEffect,  useState } from 'react'

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

//api
import { getDailyBySymbol } from '../../api';
//data
import {companies} from '../../data/companies';
// custom hook
import {convertToSymbol} from '../../utils/convertToSymbol';

const Stock = () => {

  const [company, setCompany] = useState('MSFT');
  const [stockData, setStockData] = useState()


  useEffect(()=>{

    getDailyBySymbol(company) // return a promise
    .then((data)=>{
      //console.log(data);
      setStockData(data)

    })
    .catch((err)=>{console.log(err);})
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


                {/* <MenuItem value={'TSLA'}>Tesla</MenuItem> */}
              </Select>
            </FormControl>
          </Box>

          {stockData && 
            <StockDailyInfo company={company} /> }
        </MUIContainer>

        {stockData && 
          <StockGraph stockData={stockData} company={company} /> }

    </>
  )
}

export default Stock