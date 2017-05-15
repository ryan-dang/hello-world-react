import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var moment = require('moment');
console.log(moment().format());

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
