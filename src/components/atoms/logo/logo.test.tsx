
import {render, screen} from '@testing-library/react';
import Logo from './logo';


test('test logo', ()=>{
    render(<Logo />)

    expect(screen.getByRole('img')).toBeInTheDocument();
})