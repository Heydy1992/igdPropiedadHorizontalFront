import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const BuildingSelect= ({ handleChange }) => {
  const [coefficient, setCoefficient] = useState([]);
 
  
  

  //Listar departamentos
  const listCoefficient = async () => {
    const response = await APIInvoke.invokeGET("/api/Invoices/coefficients");
        setCoefficient(response.data);
  };




  useEffect(() => {
    listCoefficient();
  }, []);




  return (
    <>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Coeficiente</label>
          <select
            className="form-control"
            id="coefficient"
            name="coefficient"
           
            onClick={(e) =>{handleChange(e)}}
            required
          >
            {coefficient && coefficient.map((item) => (
              <option value={item.id} key={item.id}>
                {item.coefficientType}
              </option>
            ))}
          </select>
        </div>
      </div>

    
    </>
  );
};

export default BuildingSelect;
