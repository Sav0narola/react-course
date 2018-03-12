import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();