import { makeStyles } from "@mui/styles";


const useStyles=makeStyles({
  icon_style:{
    "color": "#6D787E",
    "&:hover":{ color: "#0365F2"},
  }
})

function Icons(props:{icon:JSX.Element, name:string,setBooks:()=>void}){
  const classes = useStyles();
    return(
    <div data-testid="menu-icon" className={classes.icon_style} style={{ paddingBottom: "1rem" }} onClick={()=>props.setBooks()} data-bs-toggle="collapse" data-bs-target="#demo">  
      {props.icon} {props.name}
    </div>
    );
    }

export default Icons;