import { Container, createTheme, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Icons from "../atoms/icons";
import { useState } from "react";

import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import { BsBarChart, BsGraphUp, BsChatRightDots} from 'react-icons/bs';
import { BiGlobeAlt, BiTargetLock } from 'react-icons/bi';
import { RiPsychotherapyLine, RiLeafLine, RiHospitalLine, RiWallet3Line, RiHeartsLine, RiLightbulbFlashLine, RiBriefcaseLine } from 'react-icons/ri'
import { GiGreekTemple, GiVikingLonghouse } from 'react-icons/gi'
import { CgSandClock } from 'react-icons/cg'
import { AiOutlineBell } from 'react-icons/ai'

const useStyles = makeStyles((theme?:Theme)=>({
    menu_background:{
        background: "#F1F6F4"

    },
    menu_title:{
        padding: "1rem",
        borderBottom: "3px solid black",
        justifyContent: "center"
    }
}));

function MenuItems(props:{category:boolean,recently:boolean,popular:boolean,setBooks:(category:string)=>void}){
    if(props.recently) return(
        <h5>There are no recently used categories</h5>
    );
    else if(props.popular) return(
        <h5>There are no popular categories yet</h5>
    );
    return(
             <Grid container spacing={0}>
               <Grid item md={4}>
               <Icons icon={<AiOutlineBell/>} name="Entreprenurship" setBooks={()=>props.setBooks("Entrepreneurship")}  />
               <Icons icon={<ScienceOutlinedIcon fontSize="small"/>} setBooks={()=>props.setBooks("Entreprenurship")} name="Science" />
               <Icons icon={<BiGlobeAlt/>} name="Economics"  setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<RiBriefcaseLine/>} name="Corporate &amp; Culture" setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<RiPsychotherapyLine/>} name="Psychology" setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<RiLeafLine/>} name="Nature &amp; Environment" setBooks={()=>props.setBooks("Entreprenurship")} />
               </Grid>
               <Grid item md={4}>
               <Icons icon={<GiVikingLonghouse/>} name="History" setBooks={()=>props.setBooks("Entreprenurship")} />    
               <Icons icon={<GiGreekTemple/>} name="Politics" setBooks={()=>props.setBooks("Politics")} />   
               <Icons icon={<RiHospitalLine/>} name="Health &amp; Nutrition" setBooks={()=>props.setBooks("Entreprenurship")}/>
               <Icons icon={<RiLightbulbFlashLine/>} name="Motivation &amp; Inspiration" setBooks={()=>props.setBooks("Entreprenurship")}/>
               <Icons icon={<CgSandClock/>} name="Productivity" setBooks={()=>props.setBooks("Entreprenurship")}/>
               <Icons icon={<BiTargetLock/>} name="Career &amp; Success" setBooks={()=>props.setBooks("Entreprenurship")} />
               </Grid>
               <Grid item md={4}>
               <Icons icon={<BsGraphUp/>} name="Marketing &amp; Sales" setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<BsBarChart/>} name="Personal Development" setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<BsChatRightDots/>} name="Communication Skills" setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<RiWallet3Line/>} name="Money &amp; Investiment" setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<RiHeartsLine/>} name="Sex &amp; Relationship" setBooks={()=>props.setBooks("Entreprenurship")} />
               <Icons icon={<SchoolOutlinedIcon fontSize="small"/>} name="Education" setBooks={()=>props.setBooks("Entreprenurship")} />
               </Grid>
           </Grid>
    );
}

 
const Menu = (props:{setBooks:(category:string)=>void})=>{
    const [category, setCategory ] = useState(true);
    const [recently, setRecently ] = useState(false);  
    const [popular, setPopular ] = useState(false);

    const theme = createTheme();

    const classes = useStyles(theme);

    return(
       <div data-testid="menu-items" style={{ background: "#F1F6F4" }} id="demo" className="collapse">
           <Container maxWidth="md" >
           <Grid container spacing={0}>
               <Grid item md={4}>
               <Typography variant="body2" className={classes.menu_title} id="category" style={{color:category? "#116BE9":"#6D787E"}}>
                        <div onClick={()=>{setCategory(true); setRecently(false); setPopular(false)}}>Explore by category</div>
               </Typography>
               </Grid>
               <Grid item md={4}>
               <Typography variant="body2" className={classes.menu_title} style={{color:recently? "#116BE9":"#6D787E"}}>
                        <div onClick={()=>{setCategory(false); setRecently(true); setPopular(false)}}>See recently added titles</div>
                </Typography>
               </Grid>
               <Grid item md={4}>
               <Typography variant="body2" className={classes.menu_title}>
                        <div onClick={()=>{setCategory(false); setRecently(false); setPopular(true)}} style={{color:popular? "#116BE9":"#6D787E"}}>See popular titles</div>
                   </Typography>
               </Grid>
           </Grid>
           <div style={{ padding: "1rem" }} >
           <MenuItems category={category} recently={recently} popular={popular} setBooks={props.setBooks}/>
           </div>
           </Container>    
       </div>
    );
}






export default Menu 
