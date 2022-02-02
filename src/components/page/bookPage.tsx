import { Button, Grid, Typography } from "@mui/material";
import bookDetails from "../../classes/bookClass";
import { FiClock } from "react-icons/fi";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from "react";
import BookPageTemplate from "../template/bookPageTemplate";
import responsiveTheme from "../../theme"
import { ThemeProvider } from "@mui/styles";


declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
  }

function BookPage(){
    console.log(responsiveTheme)
    return(
        <ThemeProvider theme={responsiveTheme}>
        <BookPageTemplate childElement={<BookDetails />} />
        </ThemeProvider>
    );
}

function BookDetails(){

    const [book,setBooks] = useState<bookDetails>(new bookDetails(1,"title","author","time","category","image","status"))
    const id = localStorage.getItem("bookId");
    console.log("hi");
    
    useEffect(()=>{
    fetch('http://localhost:3000/books'+id)
    .then(response => response.json())
    .then(data => setBooks(data))
    },[]);
    
    const onClick = async()=>{
        book.status="finished"
        await fetch('http://localhost:3000/books'+id,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        })
         .then(response => response.json())
         .then(res=> console.log(res));

         window.location.href="finished";

    }

    return(
        <Grid container spacing={0} >
            <Grid item xs={12} style={{paddingTop:"2rem",paddingBottom:"1rem"}}>
                <Typography variant="body2">
                Get the key ideas from
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h5" style={{ paddingTop:"1rem",paddingBottom:"1rem"}}>
                {book.title}
                </Typography>
                <Typography variant="subtitle1" style={{paddingTop:"1rem"}}>
                Turning Your Business into an Enduring Great Company
                </Typography>
                <Typography variant="body1" style={{paddingTop:"1rem"}}>
                {book.author}
                </Typography>
                <Typography variant="body2" style={{paddingTop:"0.5rem",paddingBottom:"1rem"}}>
                <FiClock fontSize={20} /> {book.time}-minute read
                </Typography>
                <Grid container spacing={3} style={{paddingTop:"4rem"}}>
                
                <Grid item xs={3}> <Button variant="outlined" color="secondary">Read now</Button></Grid>
                <Grid item xs={4}><Button variant="contained" onClick={()=>onClick()} sx={{ background: "#2CE080",color: "#03314B", "&:hover":{background: "#00C263"}}}>Finished Reading</Button></Grid>
                <Grid item xs={4}>
                    <Typography variant="body2"> 
                    Send to Kindle <ArrowForwardIcon fontSize="small" />
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <img width={304} height={304} src={book.image} />
            </Grid>
        </Grid>
    );
}

export default BookPage