import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import BookDetails from "../../../classes/bookClass";
import Header from "../../atoms/header/myLibraryHeader";
import BookCard from "../../molecules/bookcard/bookCard";
import Fotter from "../../organisms/fotter/fotter";
import NavBar from "../../organisms/navbar/navbar";

function MyLibraryTemplate(props:{books:Array<BookDetails>,
                                  index:number,
                                  setBooks:(category:string)=>void
                                  readBook:(id:number)=>void }){
    const [value, setValue] = useState(props.index);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {setValue(newValue)};
    return(
        <div data-testid = 'myLibrary-template'>
            <NavBar setBooks={props.setBooks}/>
            <Container maxWidth="md">
            <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Header />
                </Grid>
            </Grid>
                <Box sx={{ }}>
                  <Tabs value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="basic tabs example">
                  <Tab label="Currently Reading"  {...a11yProps(0)} />
                  <Tab label="Finished" {...a11yProps(1)} />
                  </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                  <Grid container item xs={12} md={12} spacing={3}>
                  {props.books.filter(data => data.status==="started").map(data => <BookCard info={data}  readBook={()=>props.readBook(data.id)} />)}
                  </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <Grid container item xs={12} md={12} spacing={3}>    
                  {props.books.filter(data => data.status==="finished").map(data => <BookCard info={data}  readBook={()=>props.readBook(data.id)} />)}
                  </Grid>                      
                  </TabPanel>
            </Container>
            <Fotter />
        </div>
    );
}

export default MyLibraryTemplate

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