import React, { useEffect, useState } from 'react'
//api
import { getDailyByCompany  } from '../../api';
// materialUI components
import { Grid, Zoom } from '@mui/material';
// styles
import './stockDailyInfo.js'
import {  Container, MyHeadGrid, MyItemGrid,
          MyVolumnGrid, MyVolumnItemGrid } from './stockDailyInfo.js';

const StockDailyInfo = ( {company} ) => {

    const [dailyInfo, setDailyInfo] = useState({})

    useEffect(()=>{
        getDailyByCompany(company)
        .then((data)=>{
            //console.log(data);
            setDailyInfo(data)
      
          })
          .catch((err)=>{console.log(err);})
    },[company])
    console.log(dailyInfo);

  return (
    <Container>
        <MyHeadGrid container item xs={12} sm={12}>
            <Grid item xs={4} sm={3} > latest trading day </Grid>
            <MyVolumnGrid item        sm={3} > volume </MyVolumnGrid>
            <Grid item xs={2} sm={2} > price </Grid>
            <Grid item xs={3} sm={2} > change </Grid>   
            <Grid item xs={3} sm={2} > change percent</Grid>
        </MyHeadGrid>

{/* check dailyInfo object is not empty  */}
    {Object.keys(dailyInfo).length !==0  && (

        <Zoom in={true}>
            <Grid  container item xs={12} sm={12} rowSpacing={1}>
                <MyItemGrid item xs={4} sm={3}>{dailyInfo['Global Quote']['07. latest trading day']} </MyItemGrid>
                <MyVolumnItemGrid item        sm={3}>{dailyInfo['Global Quote']['06. volume']} </MyVolumnItemGrid>
                <MyItemGrid item xs={2} sm={2} >$ {Number(dailyInfo['Global Quote']['05. price']).toFixed(2)}</MyItemGrid>
                { dailyInfo['Global Quote']['09. change'] <0 ?(
                    <>
                    <MyItemGrid  item xs={3} sm={2} style={{color:'red'}} >{Number(dailyInfo['Global Quote']['09. change']).toFixed(2)}</MyItemGrid >  
                    <MyItemGrid  item xs={3} sm={2} style={{color:'red'}}>{dailyInfo['Global Quote']['10. change percent']}</MyItemGrid >        
                    </>
                ):(
                    <>
                    <MyItemGrid  item xs={3} sm={2} style={{color:'green'}} >{dailyInfo['Global Quote']['09. change']}</MyItemGrid >  
                    <MyItemGrid  item xs={3} sm={2} style={{color:'green'}}>{dailyInfo['Global Quote']['10. change percent']}</MyItemGrid >  
                    </>
                )}
                 
            </Grid>
        </Zoom>
    )}
    </Container>
  )
}

export default StockDailyInfo