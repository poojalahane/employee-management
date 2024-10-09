import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import EmployeeList from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";
import Register from "./components/Register"; // Import Register component
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
         <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />{" "}
        {/* Add registration route */}
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/edit/:id" element={<EditEmployee />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
