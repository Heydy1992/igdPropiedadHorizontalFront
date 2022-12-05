import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const Concept= ({ handleChange }) => {
  const [concept, setConcept] = useState([]);
 
  
  

  //Listar departamentos
  const listConcept = async () => {
    const response = await APIInvoke.invokeGET("/api/Invoices/concepts");
   
    setConcept(response.data);
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
            id="concept"
            name="concept"
           
            onClick={(e) =>{handleChange(e)}}
            required
          >
            {concept && concept.map((item) => (
              <option value={item.id} key={item.id}>
                {item.nomFac}
              </option>
            ))}
          </select>
        </div>
      </div>

    
    </>
  );
};

export default Concept;
