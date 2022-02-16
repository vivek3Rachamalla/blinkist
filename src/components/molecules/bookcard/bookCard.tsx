import { FiClock } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import AddIcon from '@mui/icons-material/Add';

import bookDetails from '../../../classes/bookClass';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Theme } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import responsiveTheme from '../../../theme';

const useStyles = makeStyles((theme:Theme)=>({
  card_style:{
    maxWidth: 285,
     button:{
       color : "#0365F2"
      }, 
      "&:hover":{
         background: "#F1F6F4",
          button:{
            background: "#0365F2",
            color : "#FFFFFF"
          }
          }
  },
  dot_button:{
    float: "right",
    paddingRight: "10px",
    }
}));

function BookCard(props:{info: bookDetails, readBook:()=>void }){
  
  const classes = useStyles(responsiveTheme)
  
  const [status, setStatus] = useState(props.info.status)
  
  const onClick = () =>{
    props.readBook();
    setStatus("started")
  }

  return (
    <Grid item xs={6} md={4}>
    <Card data-testid="book-card" sx={{ maxWidth: 285,
     button:{
       color : "#0365F2"
      }, 
      "&:hover":{
         background: "#F1F6F4",
          button:{
            background: "#0365F2",
            color : "#FFFFFF"
          }
          }  }}>
      <div data-testid="book-card-click" onClick={()=>{localStorage.setItem("bookId","/"+props.info.id); window.location.href="bookPage" }}>
      <CardMedia
        component="img"
        height="240"
        image={props.info.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div" >{props.info.title}</Typography>
        <Typography gutterBottom variant="body1" component="div" >{props.info.author}</Typography>
        <Typography gutterBottom variant="caption" component="div">
          <FiClock/> {props.info.time}-minute read
        </Typography>
        {(status==="started")? <BsThreeDots size={35} className={classes.dot_button}/>:<div ></div>}
      </CardContent>
      </div>
     {(status==="notstarted")?<Button variant="text" onClick={()=>onClick()} fullWidth startIcon={<AddIcon />}><Typography variant="body1">Add to library</Typography></Button>:
                              (status==="finished")?<Button variant="text" onClick={()=>onClick()} fullWidth ><Typography variant="body1">Read again</Typography></Button>:
                                                    <div style={{ paddingTop:"15px"}}><div style={{background:"#F1F6F4"}}><div style={{height:"15px",width:"75%" , background:"#DFE8F6"}}></div></div></div>
                                                    }                                              
    </Card>
    </Grid>
  );
}

export default BookCard
