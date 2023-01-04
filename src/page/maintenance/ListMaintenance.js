import React, { useState, useEffect } from "react";
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



const ListMaintenance = () => {

  const [maintenance, setMaintenance] = useState([]);
  const [maintenanceById, setMaintenanceById] = useState([]);

  //Filtros
  const [search, setSearch] = useState("");
  const [filteredMaintenance, setFilteredMaintenance] = useState([]);

  //Paginación
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  //Listar propetarios
  const listMaintenance = async ( page ) => {
    const response = await APIInvoke.invokeGET(`/api/Maintenances?page=${page}&pageSize=${perPage}`);
    setMaintenance(response.items);
    setTotalRows(response.totalItems);
    setFilteredMaintenance(response.items);
    
    

  };

    //Consultar Mantenimientos por id
    const handleMaintenanceById = (id) => {

      const maintenanceId = maintenance.filter(item => item.id === id);
      setMaintenanceById(maintenanceId);
     
  
     
      
    }

    //Paginacion
  const handlePageChange = (page) => {
    listMaintenance(page);
  
  }


  const handlePerRowsChange = async (newPerPage, page) => {
    const response = await APIInvoke.invokeGET(`/api/Maintenances?page=${page}&pageSize=${newPerPage}`);
    
    setMaintenance(response.items);
    setFilteredMaintenance(response.items);
    setPerPage(newPerPage);
  }

  //Anular mantenimientos
  const deleteMaintenance = async (id) => {
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
        return APIInvoke.invokePOST(`/api/Maintenances/state`,data);
        
        
      }
    }).then((response)=>{
      
        if(response.succeeded){
          
          Swal.fire(
            'Anulación',
            'El Inmueble ha sido anulado con exito!',
            'success'
          );
          listMaintenance(1);
          
          
        }
    }).catch((err) => {
      err.succeeded =false
    })
    

    
  }

  useEffect(() => {
    listMaintenance(1);
    
  },[]);
//Filtro para buscar
  useEffect(()  => {
    
    const result = maintenance.filter(maintenance => {
      return maintenance.maintenanceActive.toLowerCase().match(search.toLowerCase())
            || maintenance.period.toLowerCase().match(search.toLowerCase())
            || maintenance.responsible.toLowerCase().match(search.toLowerCase());
    });
    setFilteredMaintenance(result);

  },[search]);
  
//Columnas configuracion para el dataTable
const columns =[
  {
    name:"Nombre", 
    selector: row => row.maintenanceActive,
    sortable:true
  },

  {
    name: "Periocidad",
    selector:row => row.period,
    sortable:true
  },
  {
    name: "Encargado",
    selector:  (row) =>  row.responsible,
    sortable:true
  },
  {
    name: "Estado",
    selector:row => row.maintenanceState,
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
                onClick={() => {handleMaintenanceById(row.id)}}
                disabled={!row.state && "disabled" }
              >
                <FontAwesomeIcon icon={faPrint} />
              </button>

        &nbsp;
        <button
                
                className="btn btn-sm btn-danger anular" 
                onClick={() => {deleteMaintenance(row.id)}}
                disabled={!row.state && "disabled" }
               
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
      </>
     
      
      
      )
    
  },

  

  
] 

//Filas condicionales

const conditionalRowStyles  = [
  {
    when: row => !row.state,
    style:{
      color: 'red'
      
    }
    
      
  }
]

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
                <div className=" col-sm-4">
                  <Link to={"/createMaintenance"}className="btn btn-block btn-info ">
                    Crear Mantenimientos &nbsp;
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
                  data={filteredMaintenance}
                 
                  pagination
                  paginationServer
                  paginationTotalRows={totalRows}
                  onChangeRowsPerPage={handlePerRowsChange}
                  onChangePage={handlePageChange}
                  fixedHeader
                  fixedHeaderScrollHeight="400px"
                  conditionalRowStyles={conditionalRowStyles}
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
        <ModalInfo maintenanceById={ maintenanceById } />
      </div>  
    </div>
  );
};

export default ListMaintenance;

