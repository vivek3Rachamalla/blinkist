import bookDetails from "../../classes/bookClass";
import { useEffect, useState } from "react";
import HomePageTemplate from "../template/homePageTemplate";


 function HomePage(){
    const [homeBooks,setHomeBooks] = useState<bookDetails[]>([])
    const [books,setBooks] = useState<bookDetails[]>([])

    useEffect( ()=>{
         fetch('http://localhost:3000/books')
         .then(response => response.json())
         .then(data=>{setBooks(data); setHomeBooks(data)});
    },[])
    
    const setCategory=(category:string)=> {
        setHomeBooks(books.filter((data)=> data.category === category))
    }

    const readBook=async(id:number)=>{
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

    }

    const onSearch = (text:string) =>{
       const booksByTitle =books.filter((data)=> data.title.toLowerCase().match(text.toLowerCase()))
       const booksByAuthor =books.filter((data)=> data.author.toLowerCase().match(text.toLowerCase()))
       const result = booksByTitle.filter((data) => !booksByAuthor.includes(data))
       setHomeBooks([...result,...booksByAuthor])
    }
    
return(
    <HomePageTemplate homeBooks={homeBooks} setBooks={setCategory} readBook={readBook} onSearch={onSearch}/>
);
}

export default HomePage


