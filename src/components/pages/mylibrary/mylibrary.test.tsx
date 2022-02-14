import { render } from '@testing-library/react';
import MyLibrary from './mylibrary';

test("test myLibrary", ()=> {
    render(<MyLibrary index={0}/>)
    
})

test("test myLibrary", ()=> {
    render(<MyLibrary index={1}/>)
    
})