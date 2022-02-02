import { Avatar,Button,Dialog,IconButton,Link, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "../atoms/blinkist.png";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Menu from './menu'
import { useAuth0 } from "@auth0/auth0-react";


function NavBar(props:{setBooks:(category:string)=>void}){
    const [expanded, handleExpandClick] = useState(false);

    const [open, setOpen] = useState(false);

    const { loginWithRedirect,isAuthenticated, logout } = useAuth0();

    const handleOpen = ()=>{
      setOpen(true)
    }

    const handleClose = ()=>{
      setOpen(false)
    }
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
<nav className="navbar navbar-expand-sm bg-light navbar-dark" style={{ paddingLeft: "30rem", paddingRight: "25rem" }}>
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
        <Typography variant="body1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}
                                    onClick={()=>handleExpandClick(!expanded)}
                                    data-bs-toggle="collapse" data-bs-target="#demo">  
                 Explore{expanded?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        </Typography>
        </li>
        {isAuthenticated &&  <li className="nav-item">
             <Typography variant="body1" style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
                  <Link underline="none" color="inherit" href="mylibrary">My Library</Link>
              </Typography>
        </li>}
      </ul>
      <form className="d-flex">
      <Avatar sx={{ bgcolor: "#69A6E3" }}>A</Avatar>
      <IconButton data-testid="auth-view" color="primary" component="span" onClick={handleOpen} >
          <ExpandMoreIcon/>
      </IconButton>
      <Dialog onClose={handleClose} open={open}>
      <Button disabled={isAuthenticated} onClick={() => loginWithRedirect()}>Log In</Button>
      <Button disabled={!isAuthenticated} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button>
      </Dialog>
      </form>
  </div>
</nav>
<Menu setBooks={props.setBooks}/>
</div>

    );
}

export default NavBar