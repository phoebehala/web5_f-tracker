import { makeStyles } from '@material-ui/core/styles';

import { styled } from '@mui/material/styles';

export default makeStyles(() => ({
  button: {
    marginTop: '20px',
  },
}));

export const Container = styled('div')({
  width:'50vw',
  position:'absolute',
  top:0,
  bottom:0,
  margin:"auto",
  backgroundColor:'white',
  padding: '50px'
});
