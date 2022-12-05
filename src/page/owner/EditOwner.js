import React, { useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DepartamentAndCity from "../../components/Elements/DepartamentAndCity";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";

const EditOwner = () => {

  const navigate = useNavigate();

  const { idOwner } = useParams();

  const ownerById = async (idOwner) => {
    
    const response =  await APIInvoke.invokeGET(`/api/Administrator/owner?page=1&pageSize=10&${idOwner}`);
    return response;
  };




  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Edición de propetarios"}
          breadCrumb1={"Listado de propetarios"}
          breadCrumb2={"Edición de propetarios"}
          route={"/listOwner"}
        />
        <section className="content">
          <div className="card card-danger">
            
            <div className="card-body">
              <form >
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
                  <div className="col-4">
                    <label>Documento</label>
                    <input
                      type="text"
                      className="form-control"
                      id="document"
                      name="document"
                      value={document}
                     
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Tipo Documento</label>
                      <select
                        className="form-control"
                        id="documentType"
                        name="documentType"
                       
                        required
                      >
                        <option>Tipo de documento</option>
                        <option value={1}>CC</option>
                        <option value={2}>TI</option>
                        <option value={3}>Pasaporte</option>
                        <option value={4}>NIT</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>ROL</label>
                      <select
                        className="form-control"
                        id="role"
                        name="role"
                      
                        required
                      >
                        <option >Selecciona tipo de usuario</option>
                        <option value={1}>Propetario</option>
                        <option value={2}>Arrendatario</option>
                        
                      </select>
                    </div>
                  </div>

                  <div className="col-6">
                    <label>Primer Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstLastName"
                      name="firstLastName"
                    
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label>Segundo Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="secondLastName"
                      name="secondLastName"
                   
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Primer Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label>Segundo Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="middleName"
                      name="middleName"
                   
                      required
                    />
                  </div>
                  
                   <DepartamentAndCity />
                  
                  
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Sexo</label>
                      <select
                        className="form-control"
                        id="gender"
                        name="gender"
                       
                        required
                      >
                        <option>Selecciona el sexo</option>
                        <option value={1}>Mujer</option>
                        <option value={2}>Hombre</option>
                        
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                    
                        required
                      />  
                    </div>
                  </div> 

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                      
                        required
                      />  
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


export default EditOwner;