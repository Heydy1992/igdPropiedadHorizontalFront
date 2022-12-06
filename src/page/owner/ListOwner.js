import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';



const ListOwner = () => {

  const [owner, setOwner ] = useState([]);

  //Listar propetarios
  const listOwner = async () => {
    const response = await APIInvoke.invokeGET('/api/Administrator/owner?page=1&pageSize=10');
    setOwner(response.items);
    
    

  };

  useEffect(() => {
    listOwner();
    
  },[]);

  //Paginacion
  

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
      <ContentHeader
         
         breadCrumb1={"Inicio"}
         breadCrumb2={"Propetarios"}
         route={"#"}
       />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
            <h3 className="card-title">Listado de propetarios</h3>
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
                  <Link to={"/createOwner"}className="btn btn-block btn-danger btn-sm">Crear propetarios</Link>
                </div>
              
            </div>

            <div className="row">
              &nbsp;
            </div>
              

           
              <div className="card">
                <table
                  id="listOwner"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>Documento</th>
                      <th>Propetario</th>
                      <th>Inmueble</th>
                      <th>Opciones</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      owner.map(
                        item => 
                          <tr key={item.id}>
                            
                            <td>{item.document}</td>
                            <td>{`${item.firstName} ${item.middleName} ${item.firstLastName} ${item.secondLastName}`}</td>
                            <td></td>
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

export default ListOwner;
