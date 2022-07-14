import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import App from "./App";
import { StyleProvider } from "styles";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyleProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StyleProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
