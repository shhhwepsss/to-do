import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { store } from "./store/store"
import { Provider } from 'react-redux';
import "./Null.css"

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

