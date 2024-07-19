import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const RoutePath = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/authorized" element={<Authorization />} />
      </Routes>
    </Router>
  );
};

export default RoutePath;