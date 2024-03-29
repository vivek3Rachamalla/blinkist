import { render, screen, fireEvent } from '@testing-library/react';
import BookCard from './bookCard';

const bookInfo = {
    "id": 1,
    "title": "Being boss",
    "author": "Kathleen Shannon and Emily",
    "time": "20",
    "category": "Entrepreneurship",
    "image": "https://s3-alpha-sig.figma.com/img/d6ff/11bb/88b0e65d07ed5e88976fd6ef79c2890d?Expires=1644192000&Signature=THtMXJ-xrp-~f2vDM9QBit1gnvAyOErlkxQPamGfqxOk2s2mNVCeR-HkJ~3gkTFNk-oI7GmqbBeYnJzaGoOPUexUlbPG8xCp7mqSrcTeXW7JBcK7ZFcrIDEPsjfT~r0hpAbwejdN~6~Fmk9x8oIB~hLgaFtQbOf5TBuXRYUc17wkigKybB9CXE1wMjCjtmmwxfnYaImTzcDXgf9katMogyoNRexJUn29S~pDdXpo0EWUDM4aH4lnffxyQXPy-2P~Ir~7-RTH9DCB1dwGP6l9SXCv9TJBL5n6cjSf0OEOkB7thw0pofCbWM3FXyET~LnO0rkENH3b6USK0MY4Ej6Bow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "status": "started"
  };
  const bookInfo1 = {
    "id": 1,
    "title": "Being boss",
    "author": "Kathleen Shannon and Emily",
    "time": "20",
    "category": "Entrepreneurship",
    "image": "https://s3-alpha-sig.figma.com/img/d6ff/11bb/88b0e65d07ed5e88976fd6ef79c2890d?Expires=1644192000&Signature=THtMXJ-xrp-~f2vDM9QBit1gnvAyOErlkxQPamGfqxOk2s2mNVCeR-HkJ~3gkTFNk-oI7GmqbBeYnJzaGoOPUexUlbPG8xCp7mqSrcTeXW7JBcK7ZFcrIDEPsjfT~r0hpAbwejdN~6~Fmk9x8oIB~hLgaFtQbOf5TBuXRYUc17wkigKybB9CXE1wMjCjtmmwxfnYaImTzcDXgf9katMogyoNRexJUn29S~pDdXpo0EWUDM4aH4lnffxyQXPy-2P~Ir~7-RTH9DCB1dwGP6l9SXCv9TJBL5n6cjSf0OEOkB7thw0pofCbWM3FXyET~LnO0rkENH3b6USK0MY4Ej6Bow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "status": "notstarted"
  };
  const bookInfo2 = {
    "id": 1,
    "title": "Being boss",
    "author": "Kathleen Shannon and Emily",
    "time": "20",
    "category": "Entrepreneurship",
    "image": "https://s3-alpha-sig.figma.com/img/d6ff/11bb/88b0e65d07ed5e88976fd6ef79c2890d?Expires=1644192000&Signature=THtMXJ-xrp-~f2vDM9QBit1gnvAyOErlkxQPamGfqxOk2s2mNVCeR-HkJ~3gkTFNk-oI7GmqbBeYnJzaGoOPUexUlbPG8xCp7mqSrcTeXW7JBcK7ZFcrIDEPsjfT~r0hpAbwejdN~6~Fmk9x8oIB~hLgaFtQbOf5TBuXRYUc17wkigKybB9CXE1wMjCjtmmwxfnYaImTzcDXgf9katMogyoNRexJUn29S~pDdXpo0EWUDM4aH4lnffxyQXPy-2P~Ir~7-RTH9DCB1dwGP6l9SXCv9TJBL5n6cjSf0OEOkB7thw0pofCbWM3FXyET~LnO0rkENH3b6USK0MY4Ej6Bow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "status": "finished"
  };    

  test('book card test', ()=>{
    render(<BookCard  info={bookInfo} readBook={()=>console.log("hellow")}/>)
    const card = screen.getByTestId("book-card")
    expect(card).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("book-card-click"))
    
})

test('book card test1', ()=>{
    render(<BookCard  info={bookInfo1} readBook={()=>console.log("hellow")}/>)
    const card = screen.getByTestId("book-card")
    const button = screen.getByRole("button")
    expect(card).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    fireEvent.click(screen.getByTestId("book-card-click"))
    
})

test('book card test2', ()=>{
    render(<BookCard  info={bookInfo2} readBook={()=>console.log("hellow")}/>)
    const card = screen.getByTestId("book-card")
    const button = screen.getByRole("button")
    expect(card).toBeInTheDocument()
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    fireEvent.click(screen.getByTestId("book-card-click"))
    
})

