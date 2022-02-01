import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Header from './myLibraryHeader'
import Icons from './icons';
import { CgSandClock } from 'react-icons/cg';

test('MyLibrary header', () => {
    render(<Header />);

    expect(screen.getByText('My Library')).toBeInTheDocument();
})

test('icon test of menu', () => {
    render(<Icons  icon={<CgSandClock />} 
            name="sand clock"
            iconId="sand" 
            setBooks={()=>console.log("stories icons component")}/>);
    
    const IconTextButton = document.getElementsByTagName('a');
})