import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Chat from "./Components/Chat/Chat";
import ReloadChat from "./Components/Join/ReloadChat";

import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/reload-chat" element={<ReloadChat />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
