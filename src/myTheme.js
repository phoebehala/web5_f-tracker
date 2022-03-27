import {createTheme} from "@material-ui/core";
import { red, green,blue } from '@material-ui/core/colors';

export const myTheme = createTheme({
    palette:{
        primary:{
            main: blue[500]
        }
    },
    myBtn:{
        backgroundColor:"red",
        color:"white",
        border:"1px solid black",
        '&:hover':{
            backgroundColor:"pink"
        }

    }
})