
import { render, screen } from '@testing-library/react';
import Fotter from './fotter';


test('test fotter', ()=>{
    render(<Fotter />)
    const icon = screen.getByRole('img')
    const headers = screen.queryAllByRole('heading')
    const fotterHeaders = screen.queryAllByRole('list')
    expect(icon).toBeInTheDocument()
    expect(headers[0]).toBeInTheDocument()
    expect(fotterHeaders[0]).toBeInTheDocument() 
}) 
