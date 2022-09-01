
import App from './App';
import * as ReactDom from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const rootElement = document.getElementById('root');
ReactDom.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);