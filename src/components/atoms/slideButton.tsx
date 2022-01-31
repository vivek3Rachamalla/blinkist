import { Typography } from "@mui/material"

function SlideButton(props:{text:string,type:boolean}){
    return(
        <Typography variant="subtitle1" style={{color: props.type? "#22C870":"#6D787E", borderBottom:"3px solid", borderBottomColor: props.type? "#22C870":"#E1ECFC" }}>
            {props.text}
        </Typography>
    )
}

export default SlideButton