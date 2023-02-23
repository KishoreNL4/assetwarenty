import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../../Asset/LandingPage";
import Dealers from "./Dealers";
import Login from "../../Asset/Login";

import Products from "./Products";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/LandingPage/Products" element={<Products />} />
        <Route path="/LandingPage/Dealers" element={<Dealers />} />
      </Routes>
    </div>
  );
};

export default App;
