import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { myFirstStore } from './App.store';

function renderApp() {
    ReactDOM.render(<App />, document.getElementById('root'));
}

myFirstStore.subscribe(renderApp);
renderApp();


registerServiceWorker();
