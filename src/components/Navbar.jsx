import React from "react";
import { Link, Links, NavLink } from "react-router";

function Navbar() {
  const tabs = [
    { to: "/", title: "Home" },
    { to: "/Emp_Details", title: "Employee" },

  ];

  return (
    <div className="h-14 w-full flex justify-evenly items-center bg-slate-500 text-white ">
      <h1>Logo</h1>

      {tabs.map((el, ind) => {
        return (
          <NavLink
            className={({ isActive }) => {
              if (isActive)
                return "underline font-semibold text-slate-300-700 text-lg";
            }}
            key={ind}
            to={el.to}
          >
            {el.title}
          </NavLink>
          
          
        );
        
      })}

    </div>
  );
}

export default Navbar;
