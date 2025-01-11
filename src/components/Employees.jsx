import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/ContextDataProvider";
import Employee_EditDetails from "./Employee_EditDetails";
import Emp_UpdateDetails from "./Emp_UpdateDetails";
import { Link } from "react-router";


const Employees = () => {
  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDepart, setEmpDepart] = useState("");
  const [empRole, setEmpRole] = useState("");
  const [empSalary, setEmpSalary] = useState("");
  const [dataObj, setDataObj] = useState([]);
  let { employess, Dispatch, handleDel } = useContext(ContextData);

  async function fetchData() {
    let data = await fetch("http://localhost:3000/Employee_Details");
    let orgData = await data.json();
    setDataObj(orgData);

    Dispatch({ type: "fetch", payload: dataObj });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleForm(event) {
    event.preventDefault();

    let EmpData = {
      ID: empId,
      Name: empName,
      Department: empDepart,
      Role: empRole,
      Salary: empSalary,
    };

    setDataObj([...dataObj, EmpData]);

    Dispatch({ type: "AddForm", payload: EmpData });

    setEmpId("");
    setEmpName("");
    setEmpDepart("");
    setEmpRole("");
    setEmpSalary("");
  }

  return (
    <div className="bg-slate-200 pt-5 px-5 w-full   ">
      <div className=" mb-10  w-full ">
        <form
          onSubmit={(event) => handleForm(event)}
          className="flex items-center justify-between h-4"
        >
          <h2 className="text-slate-700 font-semibold text-lg">Add Entry :</h2>
          <input
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
            type="text"
            placeholder="Employee-ID ( Unique ID)"
          />
          <input
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
            type="text"
            placeholder="Employee Name"
          />
          <input
            value={empDepart}
            onChange={(e) => setEmpDepart(e.target.value)}
            className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
            type="text"
            placeholder="Employee Department"
          />
          <input
            value={empRole}
            onChange={(e) => setEmpRole(e.target.value)}
            className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
            type="text"
            placeholder="Employee Role"
          />
          <input
            value={empSalary}
            onChange={(e) => setEmpSalary(e.target.value)}
            className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
            type="text"
            placeholder="Employee Salary"
          />
          <button
            className="bg-slate-600 px-4 rounded-lg text-slate-200 p-1 mx-4"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>      

      <table className="w-full h-14  ">
        <thead className="text-left h-14 mb-5  ">
          <tr className="border border-black text-center ">
            <th>Employee Id</th>
            <th>Name</th>
            <th>Department</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        {dataObj.map(({ ID, Name, Department, Role, Salary, id }) => {
          return (
            <tbody key={ID} className="text-center text-slate-700">
              <tr className="border border-black h-12 ">
                <td>{ID}</td>
                <td>{Name}</td>
                <td>{Department}</td>
                <td>{Role}</td>
                <td>{Salary}</td>
                <td className=" border-black flex items-center mt-2 justify-center">
                  <button
                    onClick={() => Dispatch({ type: "Delete", payload: id })}
                    className="bg-slate-600 px-4 rounded-lg text-slate-200 p-1 mx-4"
                  >
                    Delete
                  </button>

                  <Link className="bg-slate-600 px-4 rounded-lg text-slate-200 p-1 mx-4" to={`/Emp_Details/${id}`}>Edit</Link>
                  
                </td> 
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Employees;
