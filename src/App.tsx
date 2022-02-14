import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/pages/homepage/homepage';
import MyLibrary from './components/pages/mylibrary/mylibrary';
import BookPage from './components/pages/bookpage/bookPage';
import { ThemeProvider } from '@mui/material/styles';
import responsiveTheme from './theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={responsiveTheme}>
      <Routes>
        <Route path="/">
        <Route index element={<HomePage />} />
          <Route path="mylibrary" element={<MyLibrary index={0} />} />
          <Route path="bookpage/" element={<BookPage />} />
          <Route path="finished" element={<MyLibrary index={1} />} />
        </Route>
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
