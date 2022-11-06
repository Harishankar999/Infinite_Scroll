import React from "react";
import { Route, Routes } from "react-router-dom";
import RequiredAuth from "../Components/RequiredAuth";
import Home from "./Home";
import Login from "./Login";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <RequiredAuth>
            <Home />
          </RequiredAuth>
        }
      />
    </Routes>
  );
};

export default MainRoute;
