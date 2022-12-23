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



const ListOwner = () => {

  const [owner, setOwner ] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredOwner, setFilteredOwner] = useState([]);

  //Listar propetarios
  const listOwner = async () => {
    const response = await APIInvoke.invokeGET('/api/Administrator/owner');
    setOwner(response.items);
    setFilteredOwner(response.items);
    
    

  };

  useEffect(() => {
    listOwner();
    
  },[]);

  //Filtro para buscar
 
  useEffect(()  => {
    
    const result = owner.filter(owner => {
      return owner.firstName.toLowerCase().match(search.toLowerCase()) 
            || owner.middleName.toLowerCase().match(search.toLowerCase())
            || owner.firstLastName.toLowerCase().match(search.toLowerCase())
            || owner.secondLastName.toLowerCase().match(search.toLowerCase())
            || owner.document.toLowerCase().match(search.toLowerCase());
    });
    setFilteredOwner(result);

  },[search]);
  

  //Columnas configuracion para el dataTable
  const columns =[
    {
      name:"Documento", 
      selector: row => row.document,
      sortable:true
    },

    {
      name: "Nombre propetario",
      selector:row => `${row.firstName} ${row.middleName} ${row.firstLastName} ${row.secondLastName}` ,
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
                  <Link to={"/createOwner"}className="btn btn-block btn-info btn-sm">
                  Crear propetarios &nbsp;
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
                  data={filteredOwner}
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

export default ListOwner;
