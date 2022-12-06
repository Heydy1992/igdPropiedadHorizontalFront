import React, { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";

const SelectCommonArea= ({ handleChange }) => {
  const [commonArea, setCommonArea] = useState([]);
 
  
  

  const listCommonArea = async () => {
    const response = await APIInvoke.invokeGET("/api/CommonArea?page=1&pageSize=10");
   
    setCommonArea(response.items);
  };




  useEffect(() => {
    listCommonArea();
  }, []);




  return (
    <>
      <div className="col-sm-4">
        <div className="form-group">
          <label>Area Común</label>
          <select
            className="form-control"
            id="commonArea"
            name="commonArea"
           
            onClick={(e) =>{handleChange(e)}}
            required
          >
            {commonArea && commonArea.map((item) => (
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

export default SelectCommonArea;
