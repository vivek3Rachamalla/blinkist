import { render, screen, fireEvent } from '@testing-library/react';
import BookCard from './bookCard';
import SearchBar from './searchbar';


const bookInfo = {
    "id": 1,
    "title": "Being boss",
    "author": "Kathleen Shannon and Emily",
    "time": "20",
    "category": "Entrepreneurship",
    "image": "https://s3-alpha-sig.figma.com/img/d6ff/11bb/88b0e65d07ed5e88976fd6ef79c2890d?Expires=1644192000&Signature=THtMXJ-xrp-~f2vDM9QBit1gnvAyOErlkxQPamGfqxOk2s2mNVCeR-HkJ~3gkTFNk-oI7GmqbBeYnJzaGoOPUexUlbPG8xCp7mqSrcTeXW7JBcK7ZFcrIDEPsjfT~r0hpAbwejdN~6~Fmk9x8oIB~hLgaFtQbOf5TBuXRYUc17wkigKybB9CXE1wMjCjtmmwxfnYaImTzcDXgf9katMogyoNRexJUn29S~pDdXpo0EWUDM4aH4lnffxyQXPy-2P~Ir~7-RTH9DCB1dwGP6l9SXCv9TJBL5n6cjSf0OEOkB7thw0pofCbWM3FXyET~LnO0rkENH3b6USK0MY4Ej6Bow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "status": "started"
  };

test('book card test', ()=>{
    render(<BookCard  info={bookInfo} readBook={()=>console.log("hellow")}/>)
    const card = screen.getByTestId("bookCard")
    const button = screen.getByRole("button")
    fireEvent.click(screen.getByTestId("bookCardClick"))
    fireEvent.click(button)
    expect(card).toBeInTheDocument()
})

test('search bar test', ()=>{
    render(<SearchBar />)
    const searchBar = screen.getByPlaceholderText('Search by title or author')
    expect(searchBar).toBeInTheDocument()
})