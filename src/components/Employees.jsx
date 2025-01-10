import React, { useContext, useEffect, useState } from "react";
import { ContextData } from "../context/ContextDataProvider";

const Employees = () => {
  let { employess, Dispatch } = useContext(ContextData);

  async function fetchData() {
    let data = await fetch("http://localhost:3000/Employee_Details");
    let orgData = await data.json();
    Dispatch({ type: "fetch", payload: orgData });
  }
  useEffect(() => {
    fetchData();
  }, []);

  const [empId, setEmpId] = useState("");
  const [empName, setEmpName] = useState("");
  const [empDepart, setEmpDepart] = useState("");
  const [empRole, setEmpRole] = useState("");
  const [empSalary, setEmpSalary] = useState("");

  const [dataObj, setDataObj] = useState([]);

  function handleForm(event) {
    event.preventDefault();
    setDataObj([
      ...employess,
      {
        ID: empId,
        Name: empName,
        Department: empDepart,
        Role: empRole,
        Salary: empSalary,
      },
    ]);
    setEmpId("");
    setEmpName("");
    setEmpDepart("");
    setEmpRole("");
    setEmpSalary("");
  }
  console.log(dataObj);

  return (
    <div className="bg-slate-200 pt-5 px-5 w-full   ">
      <div className=" mb-10  w-full ">
        <form
          onSubmit={(event) => {
            handleForm(event);
            Dispatch({ type: "AddData", payload: dataObj });
          }}
          className="flex items-center justify-between h-4"
        >
          <h1 className="text-slate-600  font-semibold">Add Employee:</h1>
          <input
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
            type="text"
            placeholder="Employee Id"
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

        {dataObj.map((el) => {
          return (
            <tbody key={el.ID} className="text-center text-slate-700">
              <tr className="border border-black h-12 ">
                <td>{el.ID}</td>
                <td>{el.Name}</td>
                <td>{el.Department}</td>
                <td>{el.Role}</td>
                <td>{el.Salary}</td>
                <td className="">
                  <button onClick={Dispatch({type:"Delete",payload:el.id})} className="bg-slate-600 px-4 rounded-lg text-slate-200 p-1 mx-4">Delete</button>
                  <button  className="bg-slate-600 px-4 rounded-lg text-slate-200 p-1 mx-4">Edit</button>
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
