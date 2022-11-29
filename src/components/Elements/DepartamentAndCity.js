import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const DepartamentAndCity = () => {
  const [department, setDepartment] = useState([]);
  const [idDpt, setIdDpt] = useState(0);
  

  //Listar departamentos
  const departmentList = async () => {
    const response = await APIInvoke.invokeGET("/api/Departments");
    console.log(response[0].name);
    setDepartment(response);
  };

  const handleCargarArticulos = (e) => {

    const opcion = e.target.value;
    console.log(opcion);
    setIdDpt(opcion);

  };


  useEffect(() => {
    departmentList();
  }, []);



  return (
    <div>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Departamento</label>
          <select
            className="form-control"
            id="departament"
            name="departament"
            onClick={handleCargarArticulos}
            required
          >
            {department.map((item) => (
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
          <select className="form-control" id="city" name="city" required>
                {
                    department[idDpt].map((item)=> (
                        <option>{item.cities.name}</option>
                    ))
                }
          </select>
        </div>
      </div>
    </div>
  );
};

export default DepartamentAndCity;
