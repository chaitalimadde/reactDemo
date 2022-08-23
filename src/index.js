
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as ReactDom from 'react-dom';
import React from 'react';

const rootElement = document.getElementById('root');
ReactDom.render(
	<React.StrictMode>
	<BrowserRouter>
		<App />
	</BrowserRouter>
	</React.StrictMode>,
	rootElement
);