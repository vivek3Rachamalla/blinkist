import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './navbar';

const setBooks= (category:String) => console.log("setbooks");


test('test nav bar', () =>{
    render(<NavBar setBooks={setBooks} />)
    const explore = screen.getByText('Explore')
    const menuItems = screen.getByTestId('menu-items')
    const category = screen.getByText('Explore by category')
    const resently = screen.getByText('See recently added titles')
    const popular = screen.getByText('See popular titles')
    const menuIcontext = screen.queryAllByTestId('menu-icon')
        //expect(menuItems).not.toBeVisible()
    expect(explore).toBeInTheDocument();
    fireEvent.click(explore)
    expect(menuItems).toBeVisible()

    expect(category).toBeInTheDocument();
    expect(resently).toBeInTheDocument();
    expect(popular).toBeInTheDocument();
   
    fireEvent.click(category)
    expect(menuItems).toBeVisible()

    expect(menuIcontext[0]).toBeInTheDocument();
    
    menuIcontext.forEach((iconText)=> fireEvent.click(iconText))

    fireEvent.click(resently)
    expect(screen.getByText('There are no recently used categories')).toBeVisible()

    fireEvent.click(popular)
    expect(screen.getByText('There are no popular categories yet')).toBeVisible()

    const dropdown = screen.getByTestId('account-dropbox')
    expect(dropdown).toBeInTheDocument();
    fireEvent.click(dropdown)
    //fireEvent.click(screen.getByTestId('auth-view'))
    const logInButton =screen.getByText('Log In')
    const logOutButton =screen.getByText('Log Out')
    expect(logInButton).toBeInTheDocument();
    expect(logOutButton).toBeInTheDocument();
    
})
