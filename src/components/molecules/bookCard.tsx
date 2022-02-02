import './bookCard.css'

import { FiClock } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs';
import AddIcon from '@mui/icons-material/Add';

import bookDetails from '../../classes/bookClass';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import { useState } from 'react';

function BookCard(props:{info: bookDetails, readBook:()=>void }){
  const [status, setStatus] = useState(props.info.status)
  const onClick = () =>{
    props.readBook();
    setStatus("started")
  }

  return (
    <Grid item xs={6} md={4}>
    <Card data-testid="book-card" sx={{ maxWidth: 285, button:{color : "#0365F2"}, "&:hover":{ background: "#F1F6F4", button:{background: "#0365F2",color : "#FFFFFF"} }}}>
      <div data-testid="book-card-click" onClick={()=>{localStorage.setItem("bookId","/"+props.info.id); window.location.href="bookPage" }}>
      <CardMedia
        component="img"
        height="240"
        image={props.info.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div" >{props.info.title}</Typography>
        <Typography gutterBottom variant="subtitle1" component="div" >{props.info.author}</Typography>
        <Typography gutterBottom variant="body2" component="div">
          <FiClock/> {props.info.time}-minute read
        </Typography>
      </CardContent>
      </div>
     {(status==="notstarted")?<Button variant="text" onClick={()=>onClick()} fullWidth startIcon={<AddIcon />}>Add to library</Button>:
                              (status==="finished")?<Button variant="text" onClick={()=>onClick()} fullWidth >Read again</Button>:
                                                    <Typography gutterBottom variant="body1" component="div">
                                                    <IconButton aria-label="delete" className='threeDots'><BsThreeDots /></IconButton>
                                                    </Typography>}
    </Card>
    </Grid>
  );
}

export default BookCard
