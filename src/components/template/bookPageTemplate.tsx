import { Container } from "@mui/material";
import Fotter from "../organisms/fotter";
import NavBar from "../organisms/navbar";

function BookPageTemplate(props:{childElement:JSX.Element}){
    const setBooks = (category:string)=>{
        window.location.href="";
    }
    return(
        <div>
            <NavBar setBooks={setBooks}/>
            <Container maxWidth="md">
            {props.childElement}
            </Container>
            <Fotter />
        </div>
    );
}


export default BookPageTemplate