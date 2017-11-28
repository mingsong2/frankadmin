import React from 'react';
import ReactDOM from 'react-dom';
import Route from './Route';
import store from './store';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider
        store={store}
    >
        <Route />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
