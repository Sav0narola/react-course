import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Button from './components/Button';

ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();

render(<Button/>, document.querySelector('#main'));
