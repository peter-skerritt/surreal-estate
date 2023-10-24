import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/app.css";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import NavBar from "./navbar";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/view-properties" element={<Properties />} />
        <Route path="/add-properties" element={<AddProperty />} />
      </Routes>
    </div>
  );
};

const RootComponent = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

export default RootComponent;
