import { render, screen, fireEvent } from '@testing-library/react';
import HomePage from './homepage';


test("test homePage",()=>{
    render(<HomePage />)
    const searchbar = screen.getByPlaceholderText('Search by title or author')
    fireEvent.change(searchbar)
})