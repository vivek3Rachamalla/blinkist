import { Container, Grid } from "@mui/material";
import BookDetails from "../../classes/bookClass";
import BookCard from "../molecules/bookCard";
import SearchBar from "../molecules/searchbar";
import Fotter from "../organisms/fotter";
import NavBar from "../organisms/navbar";
import banner from "../assert/images/banner.png"

function HomePageTemplate(props:{homeBooks:Array<BookDetails>,
                                setHomeBooks:(books:Array<BookDetails>)=> void,
                                books:Array<BookDetails>,
                                setBooks:(books:Array<BookDetails>)=> void,}){                                    
    
    const setCategory=(category:string)=> {
        props.setHomeBooks(props.books.filter((data)=> data.category === category))
    }

    const readBook=async(id:number)=>{
        props.books[id-1].status="started"
        await fetch('http://localhost:3000/books/'+id,{
            method:"PUT",
            headers:{ 'Content-Type': 'application/json',},
            body: JSON.stringify(props.books[id-1])
        }).then(response => response.json()).then(res=> console.log(res));
    }

    const onSearch = (text:string) =>{
       const booksByTitle =props.books.filter((data)=> data.title.toLowerCase().match(text.toLowerCase()))
       const booksByAuthor =props.books.filter((data)=> data.author.toLowerCase().match(text.toLowerCase()))
       const result = booksByTitle.filter((data) => !booksByAuthor.includes(data))
       props.setHomeBooks([...result,...booksByAuthor])
    }

    return(
        <div data-testid="home-template">
            <NavBar setBooks={setCategory}/>
            <Container maxWidth="md">
            <Grid item xs={12} md={12} style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                <img src={banner}  style={{width: "100%",height: "auto"}}/>
            </Grid>
            <Grid item md={12}>
                <SearchBar onSearch={onSearch}/>
            </Grid>
            <Grid container spacing={2} style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                {props.homeBooks.map((data)=> <BookCard info={data} readBook={()=>readBook(data.id)} />)}
            </Grid>
            </Container>
            <Fotter />
        </div>
    );

    
}


export default HomePageTemplate