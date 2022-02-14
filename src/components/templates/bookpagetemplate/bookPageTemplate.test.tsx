import { render, screen, fireEvent } from '@testing-library/react';
import data from '../../../json/bookdetails.json'
import BookDetails from '../../../classes/bookClass';
import BookPageTemplate from './bookPageTemplate';

const homeBooks:Array<BookDetails> = data.books;
const setBooks = (category:string) => console.log('setbooks')


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