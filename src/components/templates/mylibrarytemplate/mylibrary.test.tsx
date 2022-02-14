import { render, screen } from '@testing-library/react';
import data from '../../../json/bookdetails.json'
import BookDetails from '../../../classes/bookClass';
import MyLibraryTemplate from './myLibraryTemplate';

const homeBooks:Array<BookDetails> = data.books;
const setBooks = (category:string) => console.log('setbooks')
const readBook = (id:number) => console.log('read book')


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
