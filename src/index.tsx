// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; // Import your Tailwind CSS stylesheet
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
