
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as ReactDom from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store';
import { Provider } from 'react-redux';


const rootElement = document.getElementById('root');
ReactDom.render(
	<React.StrictMode>
	<BrowserRouter >
	<Provider store ={store}>
		<App />
		</Provider>
	</BrowserRouter>
	</React.StrictMode>,
	rootElement
);