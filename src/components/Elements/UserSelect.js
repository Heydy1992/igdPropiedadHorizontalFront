import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";


const UserSelect= ({ handleChange }) => {
  const [responsible, setResponsible] = useState([]);
 

  
  

  //Listar USUARIOS
  const listUser = async () => {
    const response = await APIInvoke.invokeGET("/api/Administrator");
        setResponsible(response.items);
       
        
  };




  useEffect(() => {
    listUser();
  }, []);




  return (
    <>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Usuario encargado</label>
          <select
            className="form-control"
            id="responsible"
            name="responsible"
           
            onClick={(e) =>{handleChange(e)}}
            required
          >
            {responsible && responsible.map((item) => (
              <option value={item.person.id} key={item.person.id}>
                {`${item.person.firstName} ${item.person.middleName} ${item.person.firstLastName} ${item.person.secondLastName}`}
              </option>
            ))}
          </select>
           
          
        </div>
      </div>

    
    </>
  );
};

export default UserSelect;
