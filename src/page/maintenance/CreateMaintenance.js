import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from "sweetalert2";
import Concept from "../../components/Elements/Concept";
import SelectCommonArea from "../../components/Elements/SelectCommonArea";
import UserSelect from "../../components/Elements/UserSelect";


const CreateMaintenance = () => {
  const navigate = useNavigate();

  
  const [maintenance, setMaintenance] = useState({
    commonArea: 0,
    state: 0,
    period: 0,
    quantity:0,
    initialDate:"",
    responsible:0,
    cost:0,
    observation:""
    
  });

  const { 
    commonArea,
    state,
    period,
    quantity,
    initialDate,
    responsible,
    cost,
    observation 
} = setMaintenance;

  

  
  
  const handleChange = (e) => {

   

    setMaintenance({
      ...maintenance,
      [e.target.name]: e.target.value,
    });
  };


  const createMaintenance = async () => {
    const data = {
        "maintenance": {
            "maintenanceActive": parseInt(maintenance.commonArea),
            "maintenanceState": parseInt(maintenance.state),
            "maintenanceType": 1,
            "maintenanceProgramming": 1,
            "period": parseInt(maintenance.period),
            "quantity": parseInt(maintenance.quantity),
            "initialDate": maintenance.initialDate,
            "consecutivo": "0001",
            "cost": maintenance.cost,
            "observation": maintenance.observation,
            "responsible": maintenance.responsible,
            "user": 8
          }
    };

    const response = await APIInvoke.invokePOST(
      `/api/Maintenances`,
      data
    );
    let msg = "";
    let icon = "";

    
    console.log(data)
    if (response.succeeded) {

      navigate("/listMaintenance");
      msg = "Registro creado exitosamente";
      icon = "success";

      setMaintenance({
        commonArea: 0,
        state: 0,
        period: 0,
        quantity:0,
        initialDate:"",
        responsible:0,
        cost:0,
        observacion:""
      });
    } else {
      msg = "Por favor verificar los datos ingresados";
      icon = "error";
    }
    Swal.fire({
      title: "",
      text: msg,
      icon: icon,
      showConfirmButton: false,
      showDenyButton: true,
      denyButtonText: "Aceptar",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMaintenance();
  };

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de Mantenimientos"}
          breadCrumb1={"Listado de Mantenimientos"}
          breadCrumb2={"Creación de Mantenimientos"}
          route={"/listMaintenance"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <button type="submit" className="btn btn-app bg-primary">
                    <i className="fas fa-save"></i> Grabar
                  </button>
                  <div className="col-sm-3">
                    <Link className="btn btn-app bg-danger">
                      <i className="fa fa-ban"></i> Cancelar
                    </Link>
                  </div>
                </div>

                <div className="row"> 
                <UserSelect responsible={responsible} handleChange={handleChange}/>
                  <SelectCommonArea commonArea={commonArea} handleChange={handleChange}/>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Estado</label>
                      <select
                        className="form-control"
                        id="state"
                        name="state"
                        value={state}
                        onChange={handleChange}
                        required
                      >
                        <option>Seleccione el estado</option>
                        <option value={1}>Activo</option>
                        <option value={2}>Terminado</option>
                        
                      </select>
                    </div>
                  </div>
                

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>periocidad</label>
                      <select
                        className="form-control"
                        id="period"
                        name="period"
                        value={period}
                        onChange={handleChange}
                        required
                      >
                        <option>Seleccione periocidad</option>
                        <option value={1}>Quincenal</option>
                        <option value={2}>Mensual</option>
                        
                      </select>
                    </div>
                  </div>
                
                
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Cantidad</label>
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={handleChange}
                        required
                      />  
                    </div>
                  </div> 
                 

                    
                  <div className="col-sm-4">
                    <label>Fecha de inicio</label>
                 
                    <input type="date"  
                        className="form-control"
                        id="initialDate"
                        name="initialDate"
                        value={initialDate}
                        onChange={handleChange}
                        required/>
                  </div>  
                </div>
                <div className="row"> 
                  <div className="col-sm-4">
                    <label>Costo</label>
                    <input
                      type="number"
                      className="form-control"
                      id="cost"
                      name="cost"
                      value={cost}
                      onChange={handleChange}
                      required
                    />
                  </div>

                 

                  <div class="col-sm-8">
                    <div class="form-group">
                      <label>Observación</label>
                      <textarea
                        className="form-control"
                        id="observation"
                        name="observation"
                        value={observation}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                </div>

                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CreateMaintenance;
