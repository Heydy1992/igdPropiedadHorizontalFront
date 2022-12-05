import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";


const ListUsr = () => {

  const [user, setUser ] = useState([]);

  //Listar propetarios
  const listUser = async () => {
    const response = await APIInvoke.invokeGET('/api/Administrator');
    setUser(response.items);
    
    

  };

  useEffect(() => {
    listUser();
    
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
          breadCrumb2={"Usuarios"}
          route={"#"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><Link to={"/createUsr"}className="btn btn-block btn-primary btn-sm">Crear Usuarios</Link></h3>
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
                  id="listUser"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>Documento</th>
                      <th>Nombre Usuario</th>
                      <th>Usuario</th>
                      <th>ROL</th>
                      <th>Opciones</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      user.map(
                        item => 
                          <tr key={item.id}>
                            
                            <td>{item.person.document}</td>
                            <td>{`${item.person.firstName} ${item.person.middleName} ${item.person.firstLastName} ${item.person.secondLastName}`}</td>
                            <td>{item.userName}</td>
                            <td>{item.person.role}</td>
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

export default ListUsr;

