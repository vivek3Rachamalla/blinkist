import { fireEvent, render, screen} from '@testing-library/react';
import { CgSandClock } from 'react-icons/cg';
import Icons from './icons';

test('icon test of menu', () => {
    render(<Icons  icon={<CgSandClock />} 
            name="sand clock"
            setBooks={()=>console.log("stories icons component")}/>);
    
    const IconTextButton = screen.getByTestId('menu-icon');
    fireEvent.click(IconTextButton);
    expect(IconTextButton).toBeInTheDocument();
})