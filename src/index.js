import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import store from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider
      template={AlertTemplate}
      timeout="5000"
      position={positions.TOP_RIGHT}
      transition={transitions.SCALE}
    >
      <App />
    </AlertProvider>
  </Provider>
);
