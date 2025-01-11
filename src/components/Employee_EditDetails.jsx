import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContextData } from '../context/ContextDataProvider'



function Employee_EditDetails() {

  let { employees, Dispatch } = useContext(ContextData)

  let val = useParams()

  async function fetchData() {
    let data = await fetch(`http://localhost:3000/Employee_Details/${val.EmpId}`)
    let orgData = await data.json()
    console.log(orgData);
    
  }
  useEffect(() => {
    fetchData()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
  }



  return (
    <div>
      <div>
        <div className=" mb-10  w-full ">
          <form onSubmit={(e) => handleSubmit(e)} className="flex items-center justify-between h-4">
            <h2 className="text-slate-700 font-semibold text-lg">
              Edit Details :
            </h2>

            <input
              className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
              type="text"
              placeholder="Employee-ID ( Unique ID)"
              value={EmpDataObj.ID}
              name="ID"
            />
            <input
              className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
              type="text"
              placeholder="Employee Name"
              value={EmpDataObj.Name}
            />
            <input
              className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
              type="text"
              placeholder="Employee Department"
              value={EmpDataObj.Department}
            />
            <input
              className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
              type="text"
              placeholder="Employee Role"
              value={EmpDataObj.Role}
            />
            <input
              className="text-black font-semibold px-2 rounded-lg placeholder:text-emerald-700 outline-none"
              type="text"
              placeholder="Employee Salary"
              value={EmpDataObj.Salary}
            />
            <button
              className="bg-slate-600 px-4 rounded-lg text-slate-200 p-1 mx-4"
              type="submit">
              Save Changes
            </button>
          </form>
        </div>
      </div>

      <button className="bg-slate-600 px-4 rounded-lg text-slate-200 p-1 mx-4">
        Edit
      </button>

    </div>
  )
}

export default Employee_EditDetails