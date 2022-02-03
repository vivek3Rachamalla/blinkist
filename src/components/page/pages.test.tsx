import { render, screen, fireEvent } from '@testing-library/react';
import BookPage from './bookPage';
import HomePage from './homepage';
import MyLibrary from './mylibrary';

test("test bookcard page", ()=>{
    render(<BookPage />)
    const images = screen.queryAllByRole('img');
    const titleElement = screen.getByText('title');
    const authorElement = screen.getByText('author');
    const kindle = screen.getByText('Send to Kindle');
    const buttons = screen.queryAllByRole('button')
    expect(images[0]).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();
    expect(images[2]).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(kindle).toBeInTheDocument();
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
    fireEvent.click(screen.queryAllByTestId('menu-icon')[0])
        fireEvent.click(screen.getByText('Finished Reading'))
    
})

test("test homePage",()=>{
    render(<HomePage />)
    const searchbar = screen.getByPlaceholderText('Search by title or author')
    fireEvent.change(searchbar)
})

test("test myLibrary", ()=> {
    render(<MyLibrary index={0}/>)
    
})

test("test myLibrary", ()=> {
    render(<MyLibrary index={1}/>)
    
})