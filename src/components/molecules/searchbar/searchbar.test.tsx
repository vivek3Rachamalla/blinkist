import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './searchbar';

test('search bar test', ()=>{
    render(<SearchBar onSearch={(text:string)=>console.log("search")}/>)
    const searchBar = screen.getByPlaceholderText('Search by title or author',)
    fireEvent.change(searchBar,{target: { value: "search" }})
    expect(searchBar).toBeInTheDocument()
})