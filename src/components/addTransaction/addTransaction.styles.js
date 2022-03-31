import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

import { styled } from '@mui/material/styles';

export default makeStyles(() => ({
  button: {
    marginTop: '20px',
    color:'var(--main-blue)',
    border:"1px solid var(--main-blue)",
    transition: 'all .3s ease-in-out',
    '&:hover':{
      border:'none'
    }
  },
}));

export const Mybtn = styled('button')(({ theme }) => ({
  ...theme.myBtn

}));

