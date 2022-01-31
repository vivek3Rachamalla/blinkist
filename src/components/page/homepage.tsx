import { Grid } from "@mui/material";
import Container from "@mui/material/Container"
import banner from "./banner.png"
import Page from "../template/pageTemplate";
import SearchBar from "../molecules/searchbar";
import bookDetails from "../../classes/bookClass";
import BookCard from "../molecules/bookCard";
import { useEffect, useState } from "react";
import data from "./bookdetails.json"
import HomePageTemplate from "../template/homePageTemplate";



 function HomePage(){
    const [homeBooks,setHomeBooks] = useState<bookDetails[]>([])
    const [books,setBooks] = useState<bookDetails[]>([])
    console.log("hi");

    useEffect( ()=>{
         fetch('http://localhost:3000/books')
         .then(response => response.json())
         .then(data=>{setBooks(data); setHomeBooks(data)});
    },[])
    
    const setCategory=(category:string)=> {
        setHomeBooks(books.filter((data)=> data.category === category))
    }

    
return(
    <HomePageTemplate childElement={<HomePageComponents homeBooks={homeBooks} books={books} />} setBooks={setCategory}/>
);
}

export default HomePage

function HomePageComponents(props:{homeBooks:Array<bookDetails>, books:Array<bookDetails> }){

    const readBook=async(id:number)=>{
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

    }

    return(
            <Grid container spacing={2} style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                {props.homeBooks.map((data)=> <BookCard info={data} readBook={()=>readBook(data.id)} />)}
            </Grid>
    );
}

