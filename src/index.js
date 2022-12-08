import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './components/Layout/style.css';
import { Provider } from 'react-redux';
import store from './Redux/Store';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
