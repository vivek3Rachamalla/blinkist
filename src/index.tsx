import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookCard from './components/molecules/bookCard';
import { threadId } from 'worker_threads';
import bookDetails from './classes/bookClass';
import Icons from './components/atoms/icons';
import Menu from './components/organisms/menu';
import NavBar from './components/organisms/navbar';
import Page from './components/template/pageTemplate';
import HomePage from './components/page/homepage';
import MyLibrary from './components/page/mylibrary';
import BookPage from './components/page/bookPage';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
