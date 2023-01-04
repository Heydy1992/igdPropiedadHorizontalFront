import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const Coefficient= ({ handleChange }) => {
  const [idCoefficient, setIdCoefficient] = useState([]);
 
  
  

  //Listar departamentos
  const listCoefficient = async () => {
    const response = await APIInvoke.invokeGET("/api/Invoices/coefficients");
        setIdCoefficient(response.data);
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
            id="idCoefficient"
            name="idCoefficient"
           
            onChange={(e) =>{handleChange(e)}}
            required
          >
            {idCoefficient && idCoefficient.map((item) => (
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

export default Coefficient;
