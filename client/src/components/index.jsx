import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store.js";
import App from './App.jsx';

render(
  <Provider store={store}> 
    <div>
      <App />
    </div>
  </Provider>, 
  document.getElementById('root'));


