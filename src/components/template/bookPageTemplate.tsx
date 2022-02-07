import { Box, Button, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { FiClock } from "react-icons/fi";
import Fotter from "../organisms/fotter";
import NavBar from "../organisms/navbar";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookDetails from "../../classes/bookClass";
import React from "react";

function BookPageTemplate(props:{book:BookDetails,
                                 onClick:()=>void, 
                                setBooks:(category:string)=> void}){

    const [value, setValue] = React.useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
                          setValue(newValue);
                          };    
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
                <Grid style={{ paddingTop:"1rem",paddingBottom:"1rem"}}>
                <Typography variant="header1" >
                {props.book.title}
                </Typography>
                </Grid>
                <Grid style={{paddingTop:"1rem"}}>
                <Typography variant="subtitle5">
                Turning Your Business into an Enduring Great Company
                </Typography>
                </Grid>
                <Typography variant="body1" style={{paddingTop:"1rem"}}>
                {props.book.author}
                </Typography>
                <Grid style={{paddingTop:"0.5rem",paddingBottom:"1rem"}}>
                <FiClock fontSize={20} />
                <Typography variant="caption">
                 {props.book.time}-minute read
                </Typography>
                </Grid>
                <Grid container spacing={3} style={{paddingTop:"4rem"}}>
                
                <Grid item xs={3}> <Button variant="outlined" sx={{ borderColor: "#03314B",color: "#2CE080", "&:hover":{borderColor: "#2CE080",color: "#03314B"}}}>Read now</Button></Grid>
                <Grid item xs={4}><Button variant="contained" onClick={()=>props.onClick()} sx={{ background: "#2CE080",color: "#03314B", "&:hover":{background: "#00C263"}}}>Finished Reading</Button></Grid>
                <Grid item xs={4}>
                    <Typography variant="body2"> 
                    Send to Kindle <ArrowForwardIcon fontSize="small" />
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4} style={{ paddingTop:"1rem",paddingBottom:"1rem"}}>
                <img width={304} height={304} src={props.book.image} />
            </Grid>
            <Grid item xs={8}>
            <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} 
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="basic tabs example">
          <Tab  label="Synopsis" {...a11yProps(0)} />
          <Tab  label="Who is it for?" {...a11yProps(1)} />
          <Tab  label="About the author" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
      </TabPanel>
      <TabPanel value={value} index={1}>
       Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
      </TabPanel>
      <TabPanel value={value} index={2}>
      Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
      </TabPanel>
    </Box>
            </Grid>
        </Grid>
            </Container>
            <Fotter />
        </div>
    );
}


export default BookPageTemplate

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  