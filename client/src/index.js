import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
//import LineGraph from './container/Charts/Line';
import App from './App';
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<LineGraph/>, document.getElementById('root'));
registerServiceWorker();
