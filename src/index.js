import React from 'react';
import ReactDOM from 'react-dom';
import DataEntry from './components/dataEntry';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DataEntry />, document.getElementById('root'));
registerServiceWorker();
