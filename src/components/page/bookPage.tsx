import bookDetails from "../../classes/bookClass";
import { useEffect, useState } from "react";
import BookPageTemplate from "../template/bookPageTemplate";
import responsiveTheme from "../../theme"
import { ThemeProvider } from "@mui/styles";


declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
      dashed: true;
    }
  }

function BookPage(){

    const [book,setBooks] = useState<bookDetails>(new bookDetails(1,"title","author","time","category","image","status"))
    const id = localStorage.getItem("bookId");
    console.log("hi");
    
    useEffect(()=>{
    fetch('http://localhost:3000/books'+id)
    .then(response => response.json())
    .then(data => setBooks(data))
    },[]);
    
    const navSetBooks = (category:string)=>{
        window.location.href="";
    }

    const onClick = async()=>{
        book.status="finished"
        await fetch('http://localhost:3000/books'+id,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book)
        }).then(response => response.json()).then(res=> console.log(res));
         window.location.href="finished";

    }

    return(
        <BookPageTemplate  book={book} onClick={onClick} setBooks={navSetBooks} />
    );
}


export default BookPage