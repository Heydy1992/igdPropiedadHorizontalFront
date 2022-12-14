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



const ListTariff = () => {
  const [tariff, setTariff] = useState([]);
  const [tariffById, setTariffById] = useState([]);

  //Filtros
  const [search, setSearch] = useState("");
  const [filteredTariff, setFilteredTariff] = useState([]);

   //Paginación
   const [totalRows, setTotalRows] = useState(0);
   const [perPage, setPerPage] = useState(10);


  //Listar tarifas
  const listTariff = async (page) => {
    const response = await APIInvoke.invokeGET(
      `/api/Invoices/tariffs?page=${page}&pageSize=${perPage}`
    );
    setTariff(response.items);
    setTotalRows(response.totalItems);
    setFilteredTariff(response.items);
  };

   //Consultar tarifas por id
   const handleTariffById = (id) => {

    const tariffId = tariff.filter(item => item.id === id);
    setTariffById(tariffId);
   

   
    
  }

  //Paginacion
  const handlePageChange = (page) => {
    listTariff(page);
  
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    const response = await APIInvoke.invokeGET( `/api/Invoices/tariffs?page=${page}&pageSize=${newPerPage}`);
    
    setTariff(response.items);
    setFilteredTariff(response.items);
    setPerPage(newPerPage);
  };

  //Anular tarifas
  const deleteTariff = async (id) => {
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
          listTariff(1);
          
          
        }
    }).catch((err) => {
      err.succeeded =false
    })
    

    
  }

  

  useEffect(() => {
    listTariff(1);
  }, []);

  //Filtro buscar
  useEffect(()  => {
    
      const result = tariff.filter(tariff => {
        return tariff.concept.toLowerCase().match(search.toLowerCase())
            || tariff.name.toLowerCase().match(search.toLowerCase())
            || tariff.coefficient.toLowerCase().match(search.toLowerCase()) ;

    });
    setFilteredTariff(result);
 
  },[search]);


  //Columnas configuracion para el dataTable
  const columns =[

    {
      name:"Nombre", 
      selector: row => row.name,
      sortable:true
    },

    {
      name:"Concepto", 
      selector: row => row.concept,
      sortable:true
    },

    {
      name: "Coeficiente",
      selector:row => row.coefficient,
      sortable:true
    },
    {
      name: "Valor",
      selector:row => row.value,
      sortable:true
    },
    {
      name: "Fecha de expiración",
      selector:row => row.expirationDate.substr(0,10),
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
                onClick={() => {handleTariffById(row.id)}}
                disabled={!row.state && "disabled" }
              >
                <FontAwesomeIcon icon={faPrint} />
              </button>

          &nbsp;
          <button
                
                className="btn btn-sm btn-danger anular" 
                onClick={() => {deleteTariff(row.id)}}
                disabled={!row.state && "disabled" }
               
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
        </>
       
        
        
        )
      
    },

    
  ];
  const conditionalRowStyles  = [
    {
      when: row => !row.state,
      style:{
        color: 'red'
        
      }
      
        
    }
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
          breadCrumb2={"Tarifas"}
          route={"#"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de tarifas</h3>
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
                    to={"/createTariff"}
                    className="btn btn-block btn-info btn-sm"
                  >
                    Crear tarifas &nbsp;
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
                  data={filteredTariff}
                  pagination
                  paginationServer
                  paginationTotalRows={totalRows}
                  onChangeRowsPerPage={handlePerRowsChange}
                  onChangePage={handlePageChange}
                  fixedHeader
                  fixedHeaderScrollHeight="400px"
                  paginationComponentOptions={paginationOptions}
                  conditionalRowStyles={conditionalRowStyles}
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
        <ModalInfo tariffById={ tariffById } />
      </div>  
    </div>
  );
};

export default ListTariff;
