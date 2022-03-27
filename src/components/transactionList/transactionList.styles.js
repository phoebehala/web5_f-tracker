import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

import { styled } from '@mui/material/styles';
import {Typography, Box, Grid} from "@mui/material";

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  amount:{
    textAlign:"right",
  },
  desc:{
    color: theme.palette.text.secondary,
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
export const MyItem = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,

}));

