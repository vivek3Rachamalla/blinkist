import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/page/homepage';
import MyLibrary from './components/page/mylibrary';
import BookPage from './components/page/bookPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<HomePage />} />
          <Route path="mylibrary" element={<MyLibrary index={0} />} />
          <Route path="bookpage/" element={<BookPage />} />
          <Route path="finished" element={<MyLibrary index={1} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
