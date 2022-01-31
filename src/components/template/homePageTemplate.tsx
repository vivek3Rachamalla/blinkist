import { Container, Grid } from "@mui/material";
import SearchBar from "../molecules/searchbar";
import Fotter from "../organisms/fotter";
import NavBar from "../organisms/navbar";
import banner from "./banner.png"

function HomePageTemplate(props:{childElement?:JSX.Element, setBooks:(category:string)=>void}){
    return(
        <div>
            <NavBar setBooks={props.setBooks}/>
            <Container maxWidth="md">
            <Grid item md={12} style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                <img src={banner} />
            </Grid>
            <Grid item md={12}>
                <SearchBar />
            </Grid>
            {props.childElement}
            </Container>
            <Fotter />
        </div>
    );
}


export default HomePageTemplate