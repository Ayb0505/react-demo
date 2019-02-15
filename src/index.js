import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';

import {Provider} from 'react-redux';

import App from './Components/App';
import store from './store';

import "./assets/css/base.css";
import "./assets/css/style.css";

// let root = {
//     bFoot:true,
//     bLoading:false
// }
// window.rc_root = root;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
    , 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

