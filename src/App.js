import React from "react";
import "./App.css";
import "./Mobile.css";
import "./Logins.css"
import { Routes,Route } from "react-router-dom";
import Register from "./InputPages/Register";
import Home from "./Home";
import Login from "./InputPages/Login";

const App = () => {
  return (
    
      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Register/Login" element={<Login />} />
      </Routes>
       

  );
};

export default App;
