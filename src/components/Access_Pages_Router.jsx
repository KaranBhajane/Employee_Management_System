import React from "react";
import { Route, Routes } from "react-router";
import Employees from "./Employees";
import Home from "./Home";
import Employee_EditDetails from "./Employee_EditDetails";
import Emp_UpdateDetails from "./Emp_UpdateDetails.jsx";

function Access_Pages_Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Emp_Details" element={<Employees />} />
      <Route path="/Emp_Details/:EmpId" element={<Emp_UpdateDetails />} />
      <Route path="/Emp_Details/:EmpId" element={<Employee_EditDetails />} />
    </Routes>
  );
}

export default Access_Pages_Router;
