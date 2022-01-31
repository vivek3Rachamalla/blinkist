import { Grid, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import Logo from "../atoms/blinkist.png";

const useStyles = makeStyles({
    fotter_backgroung:{
        background: "#F1F6F4",
        height: "370px"
    },
    fotter_container:{
        paddingLeft:"224px",
        paddingTop:"24px",
        paddingBottom:"24px",
        paddingRight:"224px"
    }
})

function Fotter(){
    const classes = useStyles();
    const editorial = ["Book lists","what is notification?","what is read nect?","Benfits of reding"]
    const usefulLinks = ["Pricong","Blinkist business","Gift card","Blinkist magaine","Contact & help"]
    const company = ["about","Careers","partners","Code and Condition"]
    return(
        <div className={classes.fotter_backgroung}>
            <div className={classes.fotter_container}>
                <Grid container spacing={2}>
                  <Grid item md={5}>
                  <h6><img className="rounded-pill" src={Logo} alt="logo"  width="26px" height="26px" ></img>Blinkist</h6>
                  <h2 style={{color:"#0365F2"}}>Big ideas in small packages<br></br>Start learning now</h2>
                  </Grid>
                  <Grid item md={2}>
                  <GetList header="Editorial" list={editorial} />
                  </Grid>
                  <Grid item md={2}>
                  <GetList header="Useful links" list={usefulLinks} />      
                  </Grid>
                  <Grid item md={3}>
                  <GetList header="Company" list={company} />      
                  </Grid>
                  <Grid item md={5}>
                  <Typography variant="subtitle2">    
                  © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
                  </Typography>
                  </Grid>
                </Grid>
            </div>    
        </div>    
    );
}

function GetList(props:{header:string,list:Array<string>}){
    return(
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={props.header} />
                </ListItemButton>
           </ListItem>
           { props.list.map((name)=>(
                     <ListItem disablePadding key={name}>
                     <ListItemButton component="a" href={name}>
                     <ListItemText secondary={name} />
                    </ListItemButton>           
                </ListItem>
    ))}
        </List>
    );
}

export default Fotter