import { createTheme} from '@mui/material/styles';

export const myThemeV5 = createTheme({
  myBtn:{
    backgroundColor:"red",
    color:"white",
    border:"1px solid black",
    borderRadius:"5px",
    fontSize: '0.875rem',
    '&:hover':{
        backgroundColor:"pink"
    }
}
});