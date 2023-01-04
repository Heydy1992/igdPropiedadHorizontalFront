import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const Concept= ({ handleChange }) => {
  const [idConcept, setIdConcept] = useState([]);
 
  
  

  //Listar conceptos
  const listConcept = async () => {
    const response = await APIInvoke.invokeGET("/api/Invoices/concepts");
    
    setIdConcept(response.data);
  };




  useEffect(() => {
    listConcept();
  }, []);




  return (
    <>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Concepto</label>
          <select
            className="form-control"
            id="idConcept"
            name="idConcept"
           
            onChange={(e) =>{handleChange(e)}}
            required
          >
            {idConcept && idConcept.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

    
    </>
  );
};

export default Concept;
