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



const ListBuilding = () => {

  const [building, setBuilding] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBuilding, setFilteredBuilding] = useState([]);



  //Listar propetarios
  const listBuilding = async () => {
    const response = await APIInvoke.invokeGET('/api/Building?page=2&pageSize=10');
    setBuilding(response.items);
    setFilteredBuilding(response.items);
  };

  //Anular propietarios
  const deleteBuilding = async (id) => {
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
        return APIInvoke.invokePOST(`/api/Building/state`,data);
        
        
      }
    }).then((response)=>{
      
        if(response.succeeded){
          
          Swal.fire(
            'Anulación',
            'El Inmueble ha sido anulado con exito!',
            'success'
          );
          listBuilding();
          
          
        }
    }).catch((err) => {
      err.succeeded =false
    })
    

    
  }

  

  useEffect(() => {
    listBuilding();
    
  },[]);

  //Filtro para buscar
 
  useEffect(()  => {
    
    const result = building.filter(building => {
      return building.owner.toLowerCase().match(search.toLowerCase()) 
            || building.codeBuilding.toLowerCase().match(search.toLowerCase()) 
            || building.type.toLowerCase().match(search.toLowerCase())
      });
    setFilteredBuilding(result);

  },[search]);
  

  //Columnas configuracion para el dataTable
  const columns =[
    {
      name:"Nombre Inmueble", 
      selector: row => row.codeBuilding,
      sortable:true,
    },
   
    {
      name: "Propietario",
      selector:row => row.owner,
      sortable:true
    },
    {
      name: "Tipo de inmueble",
      selector:  (row) =>  row.type,
      sortable:true
    },
    {
      name: "Opciones",
      button:true,
      

      cell: (row)  => 
        (<>
             <button 
                to={"#"} 
                className="btn btn-sm btn-info" 
                disabled={!row.state && "disabled" }
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              
              &nbsp;
              <button
                to={"#"} 
                className="btn btn-sm btn-primary" 
                disabled={!row.state && "disabled" }
              >
                <FontAwesomeIcon icon={faPrint} />
              </button>
    
              &nbsp;
              <button
                
                className="btn btn-sm btn-danger anular" 
                onClick={() => {deleteBuilding(row.id)}}
                disabled={!row.state && "disabled" }
               
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
    
        </>)
    
    }

    

    

    
  ] 

  //filas condicionales

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
         breadCrumb2={"Propiedad"}
         route={"#"}
       />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de propiedades</h3>
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
                  <Link to={"/createBuilding"}className="btn btn-block btn-info btn-sm">
                    Crear Propiedades &nbsp;
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
                  data={filteredBuilding}
                  pagination
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
    </div>
  );
};

export default ListBuilding;

