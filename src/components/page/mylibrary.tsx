import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/styles"
import { useEffect, useState } from "react"
import bookDetails from "../../classes/bookClass"
import Header from "../atoms/mylibrary"
import BookCard from "../molecules/bookCard"
import Page from "../template/pageTemplate"
import responsiveTheme from "../../theme"


function MyLibrary(props:{index:number}){
    
  const [books,setBooks] = useState<bookDetails[]>([])

    useEffect(() =>{
       fetch('http://localhost:3000/books')
         .then(response => response.json())
         .then(data=>{setBooks(data)});
    },[])
    
    return(
        <ThemeProvider theme={responsiveTheme}>
        <Page home={<MyLibraryChild books={books} index={props.index} setBooks={setBooks}/>} 
              setBooks={(category:string)=>console.log("hi")}/>
        </ThemeProvider>
    )
}

function MyLibraryChild(props:{
                                books:Array<bookDetails>,
                                index:number, 
                                setBooks:(books:Array<bookDetails>)=>void
                              }){
    
    const [value, setValue] = useState(props.index);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {setValue(newValue);};

    const readBook=async (id:number)=>{
    props.books[id-1].status="started"
    await fetch('http://localhost:3000/books/'+id,{
        method:"PUT",
        headers:{
            'Content-Type': 'application/json',
        },
    body: JSON.stringify(props.books[id-1])
    })
     .then(response => response.json())
     .then(res=> console.log(res));

    await fetch('http://localhost:3000/books')
    .then(response => response.json())
    .then(data=> props.setBooks(data));    
  }
    

    return(
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
                  {props.books.filter(data => data.status==="started").map(data => <BookCard info={data}  readBook={()=>readBook(1)} />)}
                  </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <Grid container item xs={12} md={12} spacing={3}>    
                  {props.books.filter(data => data.status==="finished").map(data => <BookCard info={data}  readBook={()=>readBook(1)} />)}
                  </Grid>                      
                  </TabPanel>
        </Container>
    )
}

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
  
export default MyLibrary

