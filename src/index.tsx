import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider
    domain="dev-4v377tcy.us.auth0.com"
    clientId="kh9uWeBtdmVZIKxxmNnaGs3lN8ZxPmp5"
    redirectUri={window.location.origin}>
     <App />
  </Auth0Provider>,
 
  document.getElementById('root')
);

reportWebVitals();
