import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';



const ListMaintenance = () => {

  const [maintenance, setMaintenance] = useState([]);

  //Listar propetarios
  const listMaintenance = async () => {
    const response = await APIInvoke.invokeGET('/api/Maintenances?page=1&pageSize=10');
    setMaintenance(response.items);
    
    

  };

  useEffect(() => {
    listMaintenance();
    
  },[]);

  //Paginacion
  

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          
          breadCrumb1={"Inicio"}
          breadCrumb2={"Novedades"}
          route={"#"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de Mantenimientos</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                  title="Collapse"
                >
                  <i className="fas fa-minus" />
                </button>
              </div>
            </div>
            <div className="card-body">

            <div className="row">
                <div className=" col-sm-2">
                  <Link to={"/createMaintenance"}className="btn btn-block btn-danger btn-sm">Crear Mantenimientos</Link>
                </div>
              
            </div>

            <div className="row">
              &nbsp;
            </div>
              <div className="card">
                <table
                  id="listNews"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Tipo de periocidad</th>
                      <th>Fecha de inicio</th>
                      <th>Cantidad de tiempo</th>
                      <th>Encargado</th>
                      <th>Estado</th>
                      <th>Costo</th>
                      <th>Opciones</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      maintenance.map(
                        item => 
                          <tr key={item.id}>
                            
                            <td>{item.maintenanceActive}</td>
                            <td>{item.period}</td>
                            <td>{item.initialDate.substr(0,10)}</td>
                            <td>{item.quantity}</td>
                            <td>{item.responsible}</td>
                            <td>{item.state && "Activo"}</td>
                            <td>{item.cost}</td>
                            <td>
                            <Link to={`/editUsr/${item.id}`} className="btn btn-sm btn-danger" ><FontAwesomeIcon icon={faPenToSquare} /></Link>&nbsp;
                             
                            </td>
                          </tr>
                      )  
                    }
                  </tbody>
                  
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ListMaintenance;

