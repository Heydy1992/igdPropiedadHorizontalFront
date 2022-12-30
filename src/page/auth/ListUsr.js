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
import ModalInfo from "./ModalInfo";




const ListUsr = () => {

  const [user, setUser ] = useState([]);
  const [userById, setUserById] = useState([]);

  //Filtros
  const [search, setSearch] = useState("");
  const [filteredUser, setFilteredUser] = useState([]);

   //Paginación
   const [totalRows, setTotalRows] = useState(0);
   const [perPage, setPerPage] = useState(10);
   

  //Listar propetarios
  const listUser = async (page) => {
    const response = await APIInvoke.invokeGET(`/api/Administrator?page=${page}&pageSize=${perPage}`);
    setUser(response.items);
    setTotalRows(response.totalItems);
    setFilteredUser(response.items);
    
    

  };

   //Consultar Usuarios  por Id
   const handleUserById = (id) => {

    const userId = user.filter(item => item.id === id);
    setUserById(userId);
   

   
    
  }

  //Paginacion
  const handlePageChange = (page) => {
    listUser(page);
  
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    const response = await APIInvoke.invokeGET(`/api/Administrator?page=${page}&pageSize=${newPerPage}`);
    
    setUser(response.items);
    setFilteredUser(response.items);
    setPerPage(newPerPage);
  }


  

  
  useEffect(() => {
    listUser(1);
    
  },[]);

  //Filtro para buscar
 
  useEffect(()  => {
    
    const result = user.filter(user => {
      return user.person.firstName.toLowerCase().match(search.toLowerCase()) 
            || user.person.middleName.toLowerCase().match(search.toLowerCase())
            || user.person.firstLastName.toLowerCase().match(search.toLowerCase())
            || user.person.secondLastName.toLowerCase().match(search.toLowerCase())
            || user.person.document.toLowerCase().match(search.toLowerCase())
            || user.userName.toLowerCase().match(search.toLowerCase());
    });
    setFilteredUser(result);

  },[search]);

  //Columnas configuracion para el dataTable
  const columns =[
    {
      name:"Documento", 
      selector: row => row.person.document,
      sortable:true
    },

    {
      name: "Nombre de usuario",
      selector:row => row.userName,
      sortable:true
    },
    {
      name: "Usuario",
    selector:  (row) => `${row.person.firstName} ${row.person.middleName} ${row.person.firstLastName} ${row.person.secondLastName}`,
      sortable:true
    },
    {
      name: "Rol",
      selector:row => row.role,
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
                onClick={() => {handleUserById(row.id)}}
                
              >
                <FontAwesomeIcon icon={faPrint} />
          </button>

          
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
          breadCrumb2={"Usuarios"}
          route={"#"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de usuarios</h3>
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
                    to={"/createUsr"}
                    className="btn btn-block btn-info btn-sm"
                  >
                    Crear Usuarios &nbsp;
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
                  data={filteredUser}
                  pagination
                  paginationServer
                  paginationTotalRows={totalRows}
                  onChangeRowsPerPage={handlePerRowsChange}
                  onChangePage={handlePageChange}
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
        <ModalInfo userById={ userById } />
      </div>

    </div>
  );
};

export default ListUsr;

