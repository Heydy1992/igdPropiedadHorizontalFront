import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2';

const CreateBuilding = () => {

  
  const navigate = useNavigate();

  const [building, setBuilding] = useState({
    type: "",
    zone:"",
    number:"",
    prefix: "",
    buildingRegistration : "",
    constructedArea : "" ,
    coefficient : "",
    cadastralCard :"",
    chip : "",
    causeTo: "",
    destination: "",
    state: "",
    address: "",
    appraisedvalue: "",
    stratum: "",
    depository: "",
    
});

  const {
    type,
    zone,
    number,
    prefix,
    buildingRegistration ,
    constructedArea ,
    coefficient,
    cadastralCard ,
    chip,
    causeTo,
    destination,
    state,
    address,
    appraisedvalue,
    stratum,
    depository,
    

    
  } = building;






  const handleChange = (e) => {
    setBuilding({
      ...building,
      [e.target.name]: e.target.value,
    });

    
  };


    const createUser = async () => {
    
        const data = {
            "idBuildingType": parseInt(building.type),
            "idZone": parseInt(building.zone),
            "idPerson": 1,
            "idCauseTo": parseInt(building.causeTo),
            "idDestination":parseInt(building.destination),
            "idState": parseInt(building.state),
            "idLessee": 29,
            "idUser": 8,
            "idCoefficient": parseInt(building.coefficient),
            "number": building.number,
            "prefix": building.prefix,
            "buildingRegistration": parseInt(buildingRegistration),
            "constructedArea": parseInt(building.constructedArea),
            "cadastralCard": parseInt(building.cadastralCard),
            "chip": building.chip,
            "address": building.address,
            "stratum": building.stratum,
            "appraisedValue": parseInt(building.appraisedvalue),
            "depository": building.depository,
            "observation": "Ninguna",
            "families":  [] ,
            "parking": [],
            "pets": [],
            "vehicles": []

              
           
            
          
         
        }
        
        const response = await APIInvoke.invokePOST(`/api/Building`, data)
            let msg = "";
            let icon = "";
            console.log(data)
            if(response.succeeded){
                navigate("/listBuilding");
                msg = "Registro creado exitosamente";
                icon="success";
                setBuilding({
                    type: "",
                    zone:"",
                    number:"",
                    prefix: "",
                    buildingRegistration : "",
                    constructedArea : "" ,
                    coefficient : "",
                    cadastralCard :"",
                    chip : "",
                    causeTo: "",
                    destination: "",
                    state: "",
                    address: "",
                    appraisedvalue: "",
                    stratum: "",
                    depository: "",
            });
            
            }else{
                msg="Por favor verificar los datos ingresados";
                icon="error";
            }  
            Swal.fire({
                title: '',
                text:msg,
                icon:icon,
                showConfirmButton:false,
                showDenyButton: true,
                denyButtonText: 'Aceptar',
            });
            

      
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        createUser();
        
    }
    
  
  
 

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de propiedades"}
          breadCrumb1={"Listado de propiedades"}
          breadCrumb2={"Creación de propiedades"}
          route={"/listBuilding"}
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
                    <div className="col-sm-4">
                        <div className="form-group">
                      <label>Tipo de propiedad</label>
                      <select
                        className="form-control"
                        id="type"
                        name="type"
                        value={type}
                        onChange={handleChange}
                        required
                      >
                        <option>Seleccione el tipo</option>
                        <option value={1}>Casa</option>
                        <option value={2}>Apartamento</option>
                        <option value={3}>Local</option>
                        
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Zona</label>
                      <select
                        className="form-control"
                        id="zone"
                        name="zone"
                        value={zone}
                        onChange={handleChange}
                        required
                      >
                        <option>Seleccione la zona</option>
                        <option value={1}>Torre</option>
                        <option value={2}>Interior</option>
                        
                      </select>
                    </div>
                  </div>
                 

                  <div className="col-sm-4">
                    <label>Número</label>
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      name="number"
                      value={number}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <label>Prefijo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="prefix"
                      name="prefix"
                      value={prefix}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  
                  <div className="col-sm-4">
                    <label>Matricula inmoviliaria</label>
                    <input
                      type="text"
                      className="form-control"
                      id="buildingRegistration"
                      name="buildingRegistration"
                      value={buildingRegistration}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <label>Area construida</label>
                    <input
                      type="text"
                      className="form-control"
                      id="constructedArea"
                      name="constructedArea"
                      value={constructedArea}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Coeficiente</label>
                      <select
                        className="form-control"
                        id="coefficient"
                        name="coefficient"
                        value={coefficient}
                        onChange={handleChange}
                        required
                      >
                        <option>Seleccione el coeficiente</option>
                        <option value={1}>Torre A - B</option>
                       
                        
                      </select>
                    </div>
                  </div>
                  

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Cedula catrastral</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cadastralCard"
                        name="cadastralCard"
                        value={cadastralCard}
                        onChange={handleChange}
                        required
                      />  
                    </div>
                  </div> 


                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Chip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="chip"
                        name="chip"
                        value={chip}
                        onChange={handleChange}
                        required
                      />  
                    </div>
                  </div> 

                
                 <div className="col-sm-4">
                    <div className="form-group">
                      <label>Causar a</label>
                      <select
                        className="form-control"
                        id="causeTo"
                        name="causeTo"
                        value={causeTo}
                        onChange={handleChange}
                        required
                      >
                        <option>Causar factura a</option>
                        <option value={1}>Propetario</option>
                        <option value={2}>Arrendatario</option>
                        
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Destino</label>
                      <select
                        className="form-control"
                        id="destination"
                        name="destination"
                        value={destination}
                        onChange={handleChange}
                        required
                      >
                        <option>Seleccione destino</option>
                        <option value={1}>Comercial</option>
                        <option value={2}>Mixto</option>
                        <option value={3}>Vivienda</option>
                        
                      </select>
                    </div>
                  </div>

                
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Estado de la propiedad</label>
                      <select
                        className="form-control"
                        id="state"
                        name="state"
                        value={state}
                        onChange={handleChange}
                        required
                      >
                        <option>Seleccione Estado</option>
                        <option value={1}>Ocupado</option>
                        <option value={2}>Desocupado</option>
                     
                        
                      </select>
                      
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleChange}
                        required
                      />  
                    </div>
                  </div> 

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Valor del avaluo</label>
                      <input
                        type="text"
                        className="form-control"
                        id="appraisedvalue"
                        name="appraisedvalue"
                        value={appraisedvalue}
                        onChange={handleChange}
                        required
                      />  
                    </div>
                  </div> 

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Estrato</label>
                      <input
                        type="text"
                        className="form-control"
                        id="stratum"
                        name="stratum"
                        value={stratum}
                        onChange={handleChange}
                        required
                      />  
                    </div>
                  </div> 


                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Deposito</label>
                      <input
                        type="text"
                        className="form-control"
                        id="depository"
                        name="depository"
                        value={depository}
                        onChange={handleChange}
                        required
                      />  
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

export default CreateBuilding;
