import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <div className="font-display">
          <Navbar />
          <ScrollToTop />
          <App />
        </div>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
