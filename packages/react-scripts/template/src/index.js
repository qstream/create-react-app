import React from 'react';
import ReactDOM from 'react-dom';
// Quik css needed to style imported components
import '@qstream/quik/lib/quik.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
