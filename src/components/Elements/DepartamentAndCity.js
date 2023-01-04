import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const DepartamentAndCity = ({ handleChange }) => {
  const [department, setDepartment] = useState([]);
  const [dpt, setDpt] = useState(1);
  
  

  //Listar departamentos
  const departmentList = async () => {
    const response = await APIInvoke.invokeGET("/api/Departments");
    setDepartment(response);
  };




  useEffect(() => {
    
    departmentList();
  }, []);




  return (
    <>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Departamento</label>
          <select
            className="form-control"
            id="department"
            name="department"
            onClick={(e)=>{setDpt(e.target.value)}}
            onChange={(e) =>{handleChange(e)}}
            required
          >
            {department && department.map((item) => (
              <option value={item.id} key={item.id}>
            
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-sm-4">
        <div className="form-group">
          <label>Ciudad</label>
          <select 
            className="form-control" 
            id="city" 
            name="city"
            onClick={(e) =>{handleChange(e)}}
            required
            
          >
            {
              
              department[dpt] && department[dpt-1].cities.map((item) => (

                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))
               
              
            }   
          </select>
        </div>
      </div>
    </>
  );
};

export default DepartamentAndCity;
