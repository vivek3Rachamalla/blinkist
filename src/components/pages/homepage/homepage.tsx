import bookDetails from "../../../classes/bookClass";
import { useEffect, useState } from "react";
import HomePageTemplate from "../../templates/homepagetemplate/homePageTemplate";


 function HomePage(){
    const [homeBooks,setHomeBooks] = useState<bookDetails[]>([])
    const [books,setBooks] = useState<bookDetails[]>([])

    useEffect( ()=>{
         fetch('http://localhost:3000/books')
         .then(response => response.json())
         .then(data=>{setBooks(data); setHomeBooks(data)});
    },[])
    

return(
    <HomePageTemplate homeBooks={homeBooks} setHomeBooks={setHomeBooks} books={books} setBooks={setBooks}/>
);
}

export default HomePage


