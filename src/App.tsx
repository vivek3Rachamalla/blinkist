import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/page/homepage';
import MyLibrary from './components/page/mylibrary';
import BookPage from './components/page/bookPage';
import { ThemeProvider } from '@mui/styles';
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
