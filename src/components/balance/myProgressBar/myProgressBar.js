import { styled } from "@mui/material";

export const BarContainer = styled('div')({
    height: 20,
    width: '90%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin:"20px auto"
});
export const ProgressBar  = styled('div')({
    height: '100%',

    borderRadius: 'inherit',

    display:'flex',
    justifyContent:'flex-end',
    textAlign:'center'
});

export const NumSpan  = styled('span')({
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
});