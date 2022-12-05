import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";


const ListBuilding = () => {

  const [building, setBuilding] = useState([]);

  //Listar propetarios
  const listBuilding = async () => {
    const response = await APIInvoke.invokeGET('/api/Building?page=1&pageSize=10');
    setBuilding(response.items);
    
    

  };

  useEffect(() => {
    listBuilding();
    
  },[]);

  //Paginacion
  

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Listado de Usuarios"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Propiedades"}
          route={"#"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><Link to={"/createBuilding"}className="btn btn-block btn-primary btn-sm">Crear Propiedad</Link></h3>
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
              <div className="card">
                <table
                  id="listBuilding"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Propetario</th>
                      <th>Tipo de inmueble</th>
                      <th>Opciones</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      building.map(
                        item => 
                          <tr key={item.id}>
                            
                            <td>{item.codeBuilding}</td>
                            <td>{item.owner}</td>
                            <td>{item.type}</td>
                            <td>
                              <Link to={`/editUsr/${item.id}`} className="btn btn-sm btn-primary" >Editar</Link>&nbsp;
                             
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

export default ListBuilding;

