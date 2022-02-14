import { render, screen, fireEvent } from '@testing-library/react';
import data from '../../../json/bookdetails.json'
import BookDetails from '../../../classes/bookClass';
import HomePageTemplate from './homePageTemplate';

const homeBooks:Array<BookDetails> = data.books;

test('test home page template', ()=>{
    render(<HomePageTemplate homeBooks={homeBooks} 
                             setHomeBooks={(books:Array<BookDetails>)=> console.log('home books')}
                             books={homeBooks} 
                             setBooks={(books:Array<BookDetails>)=> console.log('books')} />)

    expect(screen.getByTestId('home-template')).toBeInTheDocument();
    fireEvent.click(screen.queryAllByTestId('menu-icon')[0])
    fireEvent.change(screen.getByPlaceholderText('Search by title or author'),{target: { value: "search" }})
  
});

