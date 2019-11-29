import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStore } from './Store/RootStore';
import { Provider } from 'mobx-react';

ReactDOM.render(
    <Provider rootStore={new RootStore()}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
