import { makeStyles } from "@material-ui/core";

import { styled } from '@mui/material/styles';
import { Paper} from "@mui/material";

export default makeStyles( (theme)=>({
    income: {
        color:'#006b41'
    },
    expense: {
        color:'#f15d08'
    },
}))

export const MyPaper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    
}));