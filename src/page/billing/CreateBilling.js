import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from 'sweetalert2';

const CreateBilling = () => {

  
  const navigate = useNavigate();

  const [billing, setBilling] = useState({
   
    month:1,
    year:new Date().getFullYear(),
    processDate:""
  });

  const {
    
    month,
    year,
    processDate,

    
  } = billing;






  const handleChange = (e) => {
    setBilling({
      ...billing,
      [e.target.name]: e.target.value,
    });

    
  };


    const createUser = async () => {
    
        const data = {
         }
        
        const response = await APIInvoke.invokePOST(`/api/Building`, data)
            let msg = "";
            let icon = "";
            
            if(response.succeeded){
                navigate("/listBuilding");
                msg = "Registro creado exitosamente";
                icon="success";
                setBilling({
                  month:1,
                  year:new Date().getFullYear(),
                  processDate:"",
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
          title={"Generar facturas"}
          breadCrumb1={"Listado de facturas"}
          breadCrumb2={"Generar facturas"}
          route={"/listBuilding"}
        />
        <section className="content">
          <div className="card card-danger">
            
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                
                <label>Periodo de Liquidación</label>
                <div className=" form-group row">
                  <label forHtml="year" className="col-sm-1 col-form-label">Año</label>
                  <div className="col-sm-4">
                    <input
                      type="number"
                      className="form-control"
                      id="year"
                      name="year"
                      value={year}
                      onChange={handleChange}
                      required
                    />
                   
                  </div>

                  <label forHtml="year" className="col-sm-1 col-form-label">Mes</label>
                  <div className="col-sm-4">
                  <select
                        className="form-control"
                        id="month"
                        name="month"
                        value={month}
                        onChange={handleChange}
                        required
                      >
                        <option value={1}>Enero</option>
                        <option value={2}>Febrero</option>
                        <option value={3}>Marzo</option>
                        <option value={4}>Abril</option>
                        <option value={5}>Mayo</option>
                        <option value={6}>Junio</option>
                        <option value={7}>Julio</option>
                        <option value={8}>Agosto</option>
                        <option value={9}>Septiembre</option>
                        <option value={10}>Octubre</option>
                        <option value={11}>Noviembre</option>
                        <option value={12}>Diciembre</option>
                        
                      </select>
                   
                  </div>

                  <div className=" row">
                    <label forHtml="processDate" className="col-sm-3 col-form-label">Fecha de proceso</label>
                      <div className="col-sm-4">
                        <input type="date"  
                               className="form-control"
                               id="processDate"
                               name="processDate"
                               value={processDate}
                               onChange={handleChange}
                               required
                        />
                      </div> 
                      <div className="col-sm-6">
                        <button type="button" 
                          className="btn btn-primary btn-sm"
                        >
                          <i className="fa fa-bell"></i> Consultar
                        </button>
                        
                        <button 
                          type="button" 
                          className="btn btn-info btn-flat btn-sm"
                          >
                            <i class="fa fa-bell"></i> Grabar
                        </button>
                      <button 
                        type="button" 
                        className="btn btn-danger btn-sm"
                      >
                        <i class="fa fa-bell"></i> Cancelar
                      </button>
                    </div> 

                      
                      
                     
                  </div>

                  <div className=" row">
                     
                        <table className="table table-striped">
                          <th>
                            <thead>
                              <th>Inmueble</th>
                              <th>Propetario</th>
                              <th>Detalle</th>
                              <th>Fecha factura</th>
                              <th>Valor admon</th>
                              <th>IVA</th>
                              <th>Otras novedades</th>
                              <th>Otros Cobros</th>
                              <th>Total iva</th>
                              <th>Total factura</th>

                            </thead>
                          </th>
                        </table> 
                      </div>
                     

                    

                 
               
              
                 

                 
             

                  
                

                
                
                  

                 
                </div>
            </form>
            </div>
            <div className=" row">
              <div className="col-sm-6">
                <label>Novedades</label>
              </div>
           
                        <table className="table table-striped">

                          <th>
                            <thead>
                              <th>Codigo</th>
                              <th>Concepto</th>
                              <th>Valor</th>
                             

                            </thead>
                          </th>
                        </table> 

                      </div>  

                      <div className="col-sm-6">
                       <label>Otros conceptos de cobro</label>
                      </div>
           
                        <table className="table table-striped">

                          <th>
                            <thead>
                              <th>Codigo</th>
                              <th>Concepto</th>
                              <th>Valor</th>
                             

                            </thead>
                          </th>
                        </table> 

                     
          </div>  
        </section>
       

      </div>

    
      <Footer />
      
    </div>
  );
};

export default CreateBilling;
