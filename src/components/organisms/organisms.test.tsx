import { render, screen, fireEvent } from '@testing-library/react';
import Fotter from './fotter';
import NavBar from './navbar';

const setBooks= (category:String) => console.log("setbooks");

test('test fotter', ()=>{
    render(<Fotter />)
    const icon = screen.getByRole('img')
    const headers = screen.queryAllByRole('heading')
    const fotterHeaders = screen.queryAllByRole('list')
    expect(icon).toBeInTheDocument()
    expect(headers[0]).toBeInTheDocument()
    expect(fotterHeaders[0]).toBeInTheDocument() 
}) 

test('test nav bar', () =>{
    render(<NavBar setBooks={setBooks} />)
    const explore = screen.getByText('Explore')
    const menuItems = screen.getByTestId('menu-items')
    //expect(menuItems).not.toBeVisible()
    expect(explore).toBeInTheDocument();
    fireEvent.click(explore)
    expect(menuItems).toBeVisible()
})
