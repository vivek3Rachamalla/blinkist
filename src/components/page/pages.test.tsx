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
})

test("test homePage",()=>{
    render(<HomePage />)
    //const bookCards =await waitForElement(() => screen.queryAllByTestId("book-card"));
    //expect(bookCards[0]).toBeInTheDocument();
})

test("test myLibrary", ()=> {
    render(<MyLibrary index={0}/>)
    
})

test("test myLibrary", ()=> {
    render(<MyLibrary index={1}/>)
})