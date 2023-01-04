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



const ListConcept = () => {
  const [concept, setConcept] = useState([]);
  const [conceptById, setConceptById] = useState([]);

  //Filtros
  const [search, setSearch] = useState("");
  const [filteredConcept, setFilteredConcept] = useState([]);



  //Listar conceptos
  const listConcept = async () => {
    const response = await APIInvoke.invokeGET(
      `/api/Invoices/concepts`
    );
    
    setConcept(response.data);
    setFilteredConcept(response.data);
  };

   //Consultar conceptos por id
   const handleConceptById = (id) => {

    const conceptId = concept.filter(item => item.id === id);
    setConceptById(conceptId);
   

   
    
  }



  

  

  

  useEffect(() => {
    listConcept();
  }, []);

  //Filtro buscar
  useEffect(()  => {
    
      const result = concept.filter(concept => {
        return concept.name.toLowerCase().match(search.toLowerCase())
           
            

    });
    setFilteredConcept(result);
 
  },[search]);


  //Columnas configuracion para el dataTable
  const columns =[

    {
      name:"Detalle", 
      selector: row => row.name,
      sortable:true
    },

    {
      name:"Cuenta de ingreso", 
      selector: row => row.revenueAccount,
      sortable:true
    },

    {
      name: "Cuenta de cliente",
      selector:row => row.codCue,
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
                onClick={() => {handleConceptById(row.id)}}
               
              >
                <FontAwesomeIcon icon={faPrint} />
              </button>

          
        </>
       
        
        
        )
      
    },

    
  ];
 

  
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
          breadCrumb2={"Conceptos"}
          route={"#"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de Conceptos</h3>
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
                    to={"/createConcept"}
                    className="btn btn-block btn-danger btn-sm"
                  >
                    Crear conceptos &nbsp;
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
                  data={filteredConcept}
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
        <ModalInfo conceptById={ conceptById } />
      </div>  
    </div>
  );
};

export default ListConcept;
