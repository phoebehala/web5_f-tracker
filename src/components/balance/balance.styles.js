import { makeStyles } from '@material-ui/core/styles';

//mui v5
import { styled } from '@mui/material/styles';
import { Paper, Button, Box} from "@mui/material";

export default makeStyles((theme) => ({

  divider: {
    margin: '20px 0',
  },
}));

export const MyPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height:'40vh'
}));

export const Mybtn = styled('button')(({ theme }) => ({
  ...theme.myBtn

}));

export const SetBugetBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

  [theme.breakpoints.down('sm')]: {
    width: 200
  },

}));

export const SetBugetStyle ={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  height: 80,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,


}
