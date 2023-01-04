import React, { useState, useEffect} from "react";

import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash, faPrint, faSave} from "@fortawesome/free-solid-svg-icons";
import  DataTable from 'react-data-table-component';   
import 'styled-components';
import '../../css/dataTable.css';
import Swal from "sweetalert2";
import ModalInfo from "./ModalInfo";



const ListCoefficient = () => {
  const [coefficient, setCoefficient] = useState([]);
  const [coefficientById, setCoefficientById] = useState([]);

  //Filtros
  const [search, setSearch] = useState("");
  const [filteredCoefficient, setFilteredCoefficient] = useState([]);



  //Listar coeficientes
  const listCoefficient = async () => {
    const response = await APIInvoke.invokeGET(
      `/api/Invoices/coefficients`
    );
    
    setCoefficient(response.data);
    setFilteredCoefficient(response.data);
  };

   //Consultar coeficientes por id
   const handleCoefficientById = (id) => {

    const coefficientId = coefficient.filter(item => item.id === id);
    setCoefficientById(coefficientId);
   

   
    
  }



  

  //Anular coeficientes
  const deleteCoefficient = async (id) => {
    const data = [id]
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podras revertir la anulación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Anular!'
    }).then((resp) => {
      if (resp.isConfirmed) {
        return APIInvoke.invokePOST(`/api/Invoices/tariff/state`,data);
        
        
      }
    }).then((response)=>{
        
        if(response.succeeded){
          
          Swal.fire(
            'Anulación',
            'El Inmueble ha sido anulado con exito!',
            'success'
          );
          listCoefficient();
          
          
        }
    }).catch((err) => {
      err.succeeded =false
    })
    

    
  }

  

  useEffect(() => {
    listCoefficient();
  }, []);

  //Filtro buscar
  useEffect(()  => {
    
      const result = coefficient.filter(coefficient => {
        return coefficient.concept.name.toLowerCase().match(search.toLowerCase())
            || coefficient.coefficientType.toLowerCase().match(search.toLowerCase())
            

    });
    setFilteredCoefficient(result);
 
  },[search]);


  //Columnas configuracion para el dataTable
  const columns =[

    {
      name:"Detalle", 
      selector: row => row.coefficientType,
      sortable:true
    },

    {
      name:"Valor administración", 
      selector: row => row.admonValue,
      sortable:true
    },

    {
      name: "Coeficiente",
      selector:row => row.percentage,
      sortable:true
    },
    
    {
      name: "Opciones",
      cell: (row)  => 
        (
        <>
          <Link 
            to={"#"} 
            className="btn btn-sm btn-info" 
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          
          &nbsp;
          <button
                
                className="btn btn-sm btn-primary" 
                data-toggle="modal"
                data-target="#modal-lg"
                onClick={() => {handleCoefficientById(row.id)}}
               
              >
                <FontAwesomeIcon icon={faPrint} />
              </button>

          &nbsp;
          <button
                
                className="btn btn-sm btn-danger anular" 
                onClick={() => {deleteCoefficient(row.id)}}
                disabled={!row.state && "disabled" }
               
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
        </>
       
        
        
        )
      
    },

    
  ];
  //const conditionalRowStyles  = [
   // {
     // when: row => !row.state,
      //style:{
        //color: 'red'
        
      //}
      
        
    //}
  //];

  
  //Configuracion  de paginación
  const paginationOptions = {
    rowsPerPageText: "Filas por pagina",
    rangeSeparatorText:"de",
    selecetAllNowsItem:true,
    selectAllNowsItemText: "Todos",
  }
  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          breadCrumb1={"Inicio"}
          breadCrumb2={"Coeficiente"}
          route={"#"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de Coeficientes</h3>
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
                  <Link
                    to={"/createCoefficient"}
                    className="btn btn-block btn-info btn-sm"
                  >
                    Crear coeficiente &nbsp;
                    <FontAwesomeIcon icon={faSave} />
                  </Link>
                </div>
              
              </div>

              <div className="row">
               &nbsp;
              </div>

              <div className="card">
                
                
         
                <DataTable
                  columns={columns}
                  data={filteredCoefficient}
                  pagination
                  fixedHeader
                  fixedHeaderScrollHeight="400px"
                  paginationComponentOptions={paginationOptions}
                  
                  subHeader
                  subHeaderComponent={
                    <div className="form-group col-4">
                      
                      <input 
                        type="text" 
                        placeholder="Buscar..." 
                        className="form-control"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                   
                  }    
                     
                  subHeaderAlign='right'
                  
                />
              
              </div>
              


            </div>
          </div>
        </section>
      </div>
      <Footer />
      <div className="modal fade" id="modal-lg">
        <ModalInfo coefficientById={ coefficientById } />
      </div>  
    </div>
  );
};

export default ListCoefficient;
