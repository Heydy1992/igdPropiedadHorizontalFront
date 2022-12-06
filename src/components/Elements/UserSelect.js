import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";
import Select from 'react-select'

const UserSelect= ({ handleChange }) => {
  const [user, setUser] = useState([]);
 

  
  

  //Listar Propiedades
  const listUser = async () => {
    const response = await APIInvoke.invokeGET("/api/Administrator?page=1&pageSize=10");
        setUser(response.items);
       
        
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
            id="user"
            name="user"
           
            onClick={(e) =>{handleChange(e)}}
            required
          >
            {user && user.map((item) => (
              <option value={item.id} key={item.id}>
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
