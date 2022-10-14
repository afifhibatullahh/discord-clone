import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import LoginPage from "./views/auth/login/LoginPage";
import RegisterPage from "./views/auth/register/RegisterPage";
import SnackbarNotification from "./components/feedback/SnackbarNotification";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
      <SnackbarNotification />
    </>
  );
}

export default App;
