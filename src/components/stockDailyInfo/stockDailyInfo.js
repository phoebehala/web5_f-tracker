import { styled } from '@mui/material/styles';
import {Typography, Box, Grid} from "@mui/material";

export const Container = styled('div')(({ theme }) => ({
  marginBottom:'50px',

}));
export const MyHeadGrid = styled(Grid)(({ theme }) => ({
    ...theme.typography.h5,
    textAlign: 'center',
    borderBottom: "1px solid gray",
    color: theme.palette.text.secondary,
    fontWeight:'bold',
    padding: 8,
    marginBottom:8,
  }));
  
export const MyVolumnGrid = styled(Grid)(({ theme }) => ({
  ...theme.typography.h5,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontWeight:'bold',
  [theme.breakpoints.down('sm')]: {
    display:'none'
  },
}));
export const MyItemGrid = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
}));

export const MyVolumnItemGrid = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    display:'none'
  },
}));