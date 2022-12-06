import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';



const ListBuilding = () => {

  const [commonArea, setCommonArea] = useState([]);

  //Listar propetarios
  const listCommonArea = async () => {
    const response = await APIInvoke.invokeGET('/api/CommonArea?page=1&pageSize=10');
    setCommonArea(response.items);
    
    

  };

  useEffect(() => {
    listCommonArea();
    
  },[]);

  //Paginacion
  

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
      <ContentHeader
         
         breadCrumb1={"Inicio"}
         breadCrumb2={"Area común"}
         route={"#"}
       />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
            <h3 className="card-title">Listado de Area común</h3>
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
                  <Link to={"/createCommonArea"}className="btn btn-block btn-danger btn-sm">Crear Area comun</Link>
                </div>
              
            </div>

            <div className="row">
              &nbsp;
            </div>
              <div className="card">
                <table
                  id="listCommonArea"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Hora max de reserva</th>
                      <th>Hora min de reserva</th>
                      <th>Precio</th>
                      <th>Opciones</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      commonArea.map(
                        item => 
                          <tr key={item.id}>
                            
                            <td>{item.name}</td>
                            <td>{item.maxHour}</td>
                            <td>{item.minHour}</td>
                            <td>{item.price}</td>
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

export default ListBuilding;

