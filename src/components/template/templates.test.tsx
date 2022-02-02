import { render, screen, fireEvent } from '@testing-library/react';
import HomePageTemplate from './homePageTemplate';
import data from '../../json/bookdetails.json'
import BookDetails from '../../classes/bookClass';
import MyLibraryTemplate from './myLibraryTemplate';
import BookPageTemplate from './bookPageTemplate';

const homeBooks:Array<BookDetails> = data.books;
const setBooks = (category:string) => console.log('setbooks')
const readBook = (id:number) => console.log('read book')
const onSearch = (text:string) => console.log('onsearch')

test('test home page template', ()=>{
    render(<HomePageTemplate homeBooks={homeBooks} 
                             setBooks={setBooks}
                             readBook={readBook} 
                             onSearch={onSearch} />)

    expect(screen.getByTestId('home-template')).toBeInTheDocument();
});

test('test my library template reading', ()=>{
    render(<MyLibraryTemplate  books={homeBooks}
                               index={0}
                               setBooks={setBooks}
                               readBook={readBook}/>)

    expect(screen.getByTestId('myLibrary-template')).toBeInTheDocument();
})

test('test my library template finished', ()=>{
    render(<MyLibraryTemplate  books={homeBooks}
                               index={1}
                               setBooks={setBooks}
                               readBook={readBook}/>)

    expect(screen.getByTestId('myLibrary-template')).toBeInTheDocument();
})

test('test book page template', ()=>{
    render(<BookPageTemplate book={data.books[0]} 
                             onClick={()=>console.log("on click finish")}
                             setBooks={setBooks}/>)
    expect(screen.getByText('Get the key ideas from')).toBeInTheDocument();
    expect(screen.getByText('Turning Your Business into an Enduring Great Company')).toBeInTheDocument();
    expect(screen.getByText('Send to Kindle')).toBeInTheDocument();
    expect(screen.getByTestId('book-template')).toBeInTheDocument();

    const finishReadingButton = screen.getByRole('button',{name:"Finished Reading"})
    expect(finishReadingButton).toBeInTheDocument();
    fireEvent.click(finishReadingButton)
})