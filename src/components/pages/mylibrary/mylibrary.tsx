import { ThemeProvider } from "@mui/styles"
import { useEffect, useState } from "react"
import bookDetails from "../../../classes/bookClass"
import responsiveTheme from "../../../theme"
import MyLibraryTemplate from "../../templates/mylibrarytemplate/myLibraryTemplate"


function MyLibrary(props:{index:number}){
    
  const [books,setBooks] = useState<bookDetails[]>([])

    useEffect(() =>{
       fetch('http://localhost:3000/books')
         .then(response => response.json())
         .then(data=>{setBooks(data)});
    },[])

    const readBook=async (id:number)=>{
      books[id-1].status="started"
      await fetch('http://localhost:3000/books/'+id,{
          method:"PUT",
          headers:{
              'Content-Type': 'application/json',
          },
      body: JSON.stringify(books[id-1])
      })
       .then(response => response.json())
       .then(res=> console.log(res));
  
      await fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data=> setBooks(data));    
    }
    
    return(
        <ThemeProvider theme={responsiveTheme}>
        <MyLibraryTemplate  books={books}
                            index={props.index}
                            setBooks={(category:string)=> window.location.href="/"}
                            readBook={readBook}/>
        </ThemeProvider>
    )
}
  
export default MyLibrary

