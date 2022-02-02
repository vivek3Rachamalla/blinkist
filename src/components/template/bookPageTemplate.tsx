import { Button, Container, Grid, Typography } from "@mui/material";
import { FiClock } from "react-icons/fi";
import Fotter from "../organisms/fotter";
import NavBar from "../organisms/navbar";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookDetails from "../../classes/bookClass";


function BookPageTemplate(props:{book:BookDetails,
                                 onClick:()=>void, 
                                setBooks:(category:string)=> void}){
    
    return(
        <div data-testid="book-template">
            <NavBar setBooks={props.setBooks}/>
            <Container maxWidth="md">
            <Grid container spacing={0} >
            <Grid item xs={12} style={{paddingTop:"2rem",paddingBottom:"1rem"}}>
                <Typography variant="body2">
                Get the key ideas from
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h5" style={{ paddingTop:"1rem",paddingBottom:"1rem"}}>
                {props.book.title}
                </Typography>
                <Typography variant="subtitle1" style={{paddingTop:"1rem"}}>
                Turning Your Business into an Enduring Great Company
                </Typography>
                <Typography variant="body1" style={{paddingTop:"1rem"}}>
                {props.book.author}
                </Typography>
                <Typography variant="body2" style={{paddingTop:"0.5rem",paddingBottom:"1rem"}}>
                <FiClock fontSize={20} /> {props.book.time}-minute read
                </Typography>
                <Grid container spacing={3} style={{paddingTop:"4rem"}}>
                
                <Grid item xs={3}> <Button variant="outlined" color="secondary">Read now</Button></Grid>
                <Grid item xs={4}><Button variant="contained" onClick={()=>props.onClick()} sx={{ background: "#2CE080",color: "#03314B", "&:hover":{background: "#00C263"}}}>Finished Reading</Button></Grid>
                <Grid item xs={4}>
                    <Typography variant="body2"> 
                    Send to Kindle <ArrowForwardIcon fontSize="small" />
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <img width={304} height={304} src={props.book.image} />
            </Grid>
        </Grid>
            </Container>
            <Fotter />
        </div>
    );
}


export default BookPageTemplate