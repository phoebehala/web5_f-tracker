import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import { styled } from '@mui/material/styles';
import {Typography, Box, Grid} from "@mui/material";

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor:'var(--main-green)',
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: 'var(--main-orange)',
  },
  amount:{
    textAlign:"right",
  },
  icons:{
    textAlign:"right",
    paddingRight:theme.spacing(2)
  },
  btn:{
    ...theme.myBtn
  }
}));


export const Container = styled('div')({
  
});

export const StickyTop = styled(Box)(({ theme }) => ({
  ...theme.typography.h5,
  color: theme.palette.text.secondary,
  backgroundColor: 'white',
  position:"sticky",
  top: 0,
  zIndex:"1",
  padding:"10px 0"
}));
export const Top = styled('div')({
  display:'flex',
  justifyContent:'space-between',
  paddingBottom: 8,
  borderRadius: 4,
});

export const Mybtn = styled('button')(({ theme }) => ({
  ...theme.myBtn

}));

export const MyHeadGrid = styled(Grid)(({ theme }) => ({
  ...theme.typography.h5,
  textAlign: 'center',
  borderBottom: "1px solid gray",
  padding: 8,
}));

export const ListItemsWarper = styled('div')({
  maxHeight:'50vh',
  overflow: 'auto',
});

export const MyItemGrid = styled(Grid)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));
export const MyDescHeadGrid = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.secondary,

  [theme.breakpoints.down('sm')]: {
    display:'none'
  },
}));
export const MyDescGrid = styled(Grid)(({ theme }) => ({
  textAlign:"right",
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    display:'none '
  },
}));
export const MyItem = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

