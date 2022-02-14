import { render, screen, fireEvent } from '@testing-library/react';
import BookPage from './bookPage';

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
    fireEvent.click(screen.queryAllByTestId('menu-icon')[0])
        fireEvent.click(screen.getByText('Finished Reading'))
    
})