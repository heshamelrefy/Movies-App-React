
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.css";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter basename='/#/'>
    <App/>
    </BrowserRouter>
, document.getElementById('root')
);


