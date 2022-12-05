import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";


const ListTariff= () => {

  const [tariff, setTariff] = useState([]);

  //Listar propetarios
  const listTariff = async () => {
    const response = await APIInvoke.invokeGET('/api/Invoices/tariffs?page=1&pageSize=10');
    setTariff(response.items);
    
    

  };

  useEffect(() => {
    listTariff();
    
  },[]);

  //Paginacion
  

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Listado de Tarifas"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Tarifas"}
          route={"#"}
        />
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title"><Link to={"/createTariff"}className="btn btn-block btn-primary btn-sm">Crear tarifas</Link></h3>
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
                  id="listTariff"
                  className="table table-bordered table-hover"
                >
                  <thead>
                    <tr>
                      <th>Concepto</th>
                      <th>Coeficiente</th>
                      <th>Valor</th>
                      <th>Fecha Vencimiento</th>
                      <th>Opciones</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {
                      tariff.map(
                        item => 
                          <tr key={item.id}>
                            
                            <td>{item.concept}</td>
                            <td>{item.coefficient}</td>
                            <td>{item.value}</td>
                            <td>{item.expirationDate.substr(0,10)}</td>
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

export default ListTariff;

