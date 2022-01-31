import { Avatar, Backdrop, Container, Grid, IconButton, Link, Typography } from "@mui/material";
import { Component, useState } from "react";
import Logo from "../atoms/blinkist.png";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Menu from './menu'
import { makeStyles } from "@mui/styles";
import bookDetails from "../../classes/bookClass";
import { typography } from "@mui/system";

function NavBar(props:{setBooks:(category:string)=>void}){
    const [expanded,handleExpandClick] = useState(false);

    return(
      /*<Container maxWidth="md" >
        <Grid container spacing={2} style={{ paddingTop:"3rem" }}>
          <Grid xs={3} md={2}>
            <Typography variant="h5" onClick={()=>console.log("hi")}>
              <img className="navitem rounded-pill" src={Logo} alt="logo"  width="26px" height="26px" ></img>Blinkist
            </Typography>
          </Grid>
          <Grid xs={1} md={1}>
              <SearchIcon fontSize="large" />
          </Grid>
          <Grid xs={3} md={2}>
            <Typography variant="body1" onClick={()=>handleExpandClick(!expanded)}>
                Explore{expanded?<ExpandLessIcon/>:<ExpandMoreIcon/>}
            </Typography>
          </Grid>
          <Grid xs={3} md={2}>
              <Typography variant="body1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
                  <Link underline="none" color="inherit" href="mylibrary">My Library</Link>
              </Typography>
          </Grid>
        </Grid>
        <Backdrop
        sx={{ color: '#fff'}}
        open={expanded}
      >
        <Menu setBooks={props.setBooks}/>
      </Backdrop>
      </Container>*/
<div>       
<nav className="navbar navbar-expand-sm bg-light navbar-dark" style={{ paddingLeft: "30rem", paddingRight: "25rem" }}>
<div className="container-fluid">
    <Typography variant="h5" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
    <a>
      <img className="navitem rounded-pill" src={Logo} alt="logo"  width="26px" height="26px" ></img>Blinkist
    </a>
    </Typography>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Typography style={{paddingLeft:"1rem",paddingRight:"1rem"}}>  
           <SearchIcon fontSize="large" />
        </Typography>
        </li>
        <li className="nav-item">
        <Typography variant="body1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>  
           <div  onClick={()=>handleExpandClick(!expanded)} data-bs-toggle="collapse" data-bs-target="#demo">
                 Explore{expanded?<ExpandLessIcon/>:<ExpandMoreIcon/>}
           </div>
      </Typography>
        </li>
        <li className="nav-item">
             <Typography variant="body1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
                  <Link underline="none" color="inherit" href="mylibrary">My Library</Link>
              </Typography>
        </li>
      </ul>
      <form className="d-flex">
      <Avatar sx={{ bgcolor: "#69A6E3" }}>A</Avatar>
      </form>
  </div>
</nav>
<Menu setBooks={props.setBooks}/>
</div>

    );
}

export default NavBar