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


const ListBuilding = () => {

  const [building, setBuilding] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBuilding, setFilteredBuilding] = useState([]);



  //Listar propetarios
  const listBuilding = async () => {
    const response = await APIInvoke.invokeGET('/api/Building?page=1&pageSize=10');
    setBuilding(response.items);
    setFilteredBuilding(response.items);    
    

  };

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
      sortable:true
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
          <Link 
            to={"#"} 
            className="btn btn-sm btn-primary" 
          >
            <FontAwesomeIcon icon={faPrint} />
          </Link>

          &nbsp;
          <Link 
            to={"#"} 
            className="btn btn-sm btn-danger" 
          >
            <FontAwesomeIcon icon={faTrash} />
          </Link>
        </>
       
        
        
        )
      
    },

    
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
                  <Link to={"/createBuilding"}className="btn btn-block btn-danger btn-sm">
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

