import { Container, Grid } from "@mui/material";
import BookDetails from "../../classes/bookClass";
import BookCard from "../molecules/bookCard";
import SearchBar from "../molecules/searchbar";
import Fotter from "../organisms/fotter";
import NavBar from "../organisms/navbar";
import banner from "./banner.png"

function HomePageTemplate(props:{homeBooks:Array<BookDetails>,
                                setBooks:(category:string)=>void,
                                readBook:(id:number)=>void,
                                onSearch:(text:string)=>void}){
    return(
        <div data-testid="home-template">
            <NavBar setBooks={props.setBooks}/>
            <Container maxWidth="md">
            <Grid item md={12} style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                <img src={banner} />
            </Grid>
            <Grid item md={12}>
                <SearchBar onSearch={props.onSearch}/>
            </Grid>
            <Grid container spacing={2} style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                {props.homeBooks.map((data)=> <BookCard info={data} readBook={()=>props.readBook(data.id)} />)}
            </Grid>
            </Container>
            <Fotter />
        </div>
    );
}


export default HomePageTemplate