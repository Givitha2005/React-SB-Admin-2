import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import Chart from "./Components/Chart";
import Table from "./Components/Table";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
          <Route path="/table" element={<Table />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
