//mui v5
import { styled } from '@mui/material/styles';
import { Paper} from "@mui/material";


export const MyPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  height:'40vh'
}));

export const Mybtn = styled('button')(({ theme }) => ({
  ...theme.myBtn

}));


export const SetBugetStyle ={
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  height: 100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,


}
