import { Avatar,Button,Container,IconButton,Link, Menu, MenuItem, Theme, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "./blinkist.png";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import MenuItems from '../menu/menu'
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { makeStyles } from "@mui/styles";
import responsiveTheme from "../../../theme";


const useStyles = makeStyles((theme:Theme)=>({
  navItem_style:{
    "&:hover":{
    borderBottom: "3px solid #2CE080",
    },
    paddingLeft:"1rem",
    paddingRight:"1rem"
  }
}))

function NavBar(props:{setBooks:(category:string)=>void}){
     
    const classes = useStyles(responsiveTheme);

    const [expanded, handleExpandClick] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const { loginWithRedirect,isAuthenticated, logout } = useAuth0();

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
              </TypographComponentComponenty>
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
<Container maxWidth="lg">       
<nav className="navbar navbar-expand-sm bg-light navbar-dark" >
<div className="container-fluid">
    <Typography variant="h5" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
      <img className="navitem rounded-pill" src={Logo} alt="logo"  width="26px" height="26px" ></img>Blinkist
    </Typography>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Typography style={{paddingLeft:"1rem",paddingRight:"1rem"}}>  
           <SearchIcon fontSize="large" />
        </Typography>
        </li>
        <li className="nav-item">
        <Typography variant="body1" className={classes.navItem_style}
                                    onClick={()=>handleExpandClick(!expanded)}
                                    data-bs-toggle="collapse" data-bs-target="#demo">  
                 Explore {expanded?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        </Typography>
        </li>
        {isAuthenticated &&  <li className="nav-item">
             <Link underline="none" color="inherit" href="mylibrary">
             <Typography variant="body1"  className={classes.navItem_style}>
                  My Library
              </Typography>
              </Link>
        </li>}
      </ul>
      <div className="d-flex">
      <Avatar sx={{ bgcolor: "#69A6E3" }}>A</Avatar>
      <IconButton  
         data-testid='account-dropbox'
         id="basic-button"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         component="span" 
         onClick={handleClick} >
          <ExpandMoreIcon/>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <Button disabled={isAuthenticated} onClick={() => loginWithRedirect()}>Log In</Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Button disabled={!isAuthenticated} sx={{color:"red"}} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
        </MenuItem>
      </Menu>
      </div>
  </div>
</nav>
</Container>
<MenuItems setBooks={props.setBooks}/>
</div>

    );
}

export default NavBar