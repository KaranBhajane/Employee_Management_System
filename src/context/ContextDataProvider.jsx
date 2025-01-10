import React, { createContext, useReducer } from "react";
export const ContextData = createContext();

function ContextDataProvider({ children }) {
  const [employess, Dispatch] = useReducer(reducerFn, []);

  function reducerFn(state, action) {
    
    switch (action.type) {
      
      case "fetch":
          return action.payload;

      case "AddData":
        fetch("http://localhost:3000/Employee_Details", {
          method: "POST",
          body: JSON.stringify(action.payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        
       
          
        
    } 
  }


  return (
    <ContextData.Provider value={{ employess, Dispatch }}>
      {children}
    </ContextData.Provider>
  );
}

export default ContextDataProvider;
