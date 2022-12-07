import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const BuildingSelect= ({ handleChange }) => {
  const [building, setBuilding] = useState([]);
 

  
  

  //Listar Propiedades
  const listBuilding = async () => {
    const response = await APIInvoke.invokeGET("/api/Building?page=1&pageSize=10");
        setBuilding(response.items);
       
        
  };




  useEffect(() => {
    listBuilding();
  }, []);




  return (
    <>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Propiedades</label>
          <select
            className="form-control"
            id="building"
            name="building"
           
            onClick={(e) =>{handleChange(e)}}
            required
          >
            {building && building.map((item) => (
              <option value={item.id} key={item.id}>
                {item.codeBuilding}
              </option>
            ))}
          </select>
           
          
        </div>
      </div>

    
    </>
  );
};

export default BuildingSelect;
