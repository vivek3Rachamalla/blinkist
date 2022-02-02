import { fireEvent, render, screen} from '@testing-library/react';

import Header from './myLibraryHeader'
import Icons from './icons';
import { CgSandClock } from 'react-icons/cg';
import Logo from './logo';

test('MyLibrary header', () => {
    render(<Header />);

    expect(screen.getByText('My Library')).toBeInTheDocument();
})

test('icon test of menu', () => {
    render(<Icons  icon={<CgSandClock />} 
            name="sand clock"
            setBooks={()=>console.log("stories icons component")}/>);
    
    const IconTextButton = screen.getByTestId('menu-icon');
    fireEvent.click(IconTextButton);
    expect(IconTextButton).toBeInTheDocument();
})

test('test logo', ()=>{
    render(<Logo />)

    expect(screen.getByRole('img')).toBeInTheDocument();
})