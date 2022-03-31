import { createTheme} from '@mui/material/styles';

export const myThemeV5 = createTheme({
  myBtn:{
    backgroundColor:"var(--main-blue)",
    color:"white",
    border:'none',
    borderRadius:"5px",
    padding:'8px 15px',
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    letterSpacing:'1px',

    transition: 'all .3s ease-in-out',
    '&:hover':{
        backgroundColor:"var(--secondary-blue)"
    }
}
});