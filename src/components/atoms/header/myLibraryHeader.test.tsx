import { fireEvent, render, screen} from '@testing-library/react';

import Header from './myLibraryHeader'

test('MyLibrary header', () => {
    render(<Header />);

    expect(screen.getByText('My Library')).toBeInTheDocument();
})