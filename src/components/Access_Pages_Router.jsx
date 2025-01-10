import React from "react";
import { Route, Routes } from "react-router";
import Employees from "./Employees";
import Home from "./Home";
import Employee_Entry from "./Employee_Entry";
import Employee_Details from "./Employee_Details";

function Access_Pages_Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Emp_Details" element={<Employees />} />
      <Route path="/Emp_Details/:EmpId" element={<Employee_Entry />} />
      <Route path="/Emp_Details/edit/:id" element={<Employee_Details />} />
    </Routes>
  );
}

export default Access_Pages_Router;
