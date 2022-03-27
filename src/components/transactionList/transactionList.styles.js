import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

import { styled } from '@mui/material/styles';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
  btn:{
    ...theme.myBtn
  }
}));


export const Top = styled('div')({
  display:'flex',
  justifyContent:'space-between',
  padding: 8,
  borderRadius: 4,
});
