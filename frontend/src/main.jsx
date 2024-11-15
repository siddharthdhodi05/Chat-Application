import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./redux/store.js";

export const BASE_URL="http://localhost:8080"

createRoot(document.getElementById("root")).render(

  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster />
    </Provider>
  </StrictMode>
);
