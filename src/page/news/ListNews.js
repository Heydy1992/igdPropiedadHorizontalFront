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


const ListNews = () => {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);

  //Listar propetarios
  const listNews = async () => {
    const response = await APIInvoke.invokeGET('/api/Invoices/news');
    setNews(response.items);
    setFilteredNews(response.items);
    
    

  };

  useEffect(() => {
    listNews();
    
  },[]);

  //Filtro para buscar
 
  useEffect(()  => {
    
    const result = news.filter(news => {
      return news.concept.toLowerCase().match(search.toLowerCase());
    });
    setFilteredNews(result);

  },[search]);

  //Columnas configuracion para el dataTable
  const columns =[
    {
      name:"Concepto", 
      selector: row => row.concept,
      sortable:true
    },

    {
      name: "Inmueble",
      selector:row => row.building,
      sortable:true
    },
    {
      name: "Valor",
      selector:  (row) =>  row.value,
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
          breadCrumb2={"Novedades"}
          route={"#"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de novedades</h3>
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
                  <Link to={"/createNews"}className="btn btn-block btn-danger btn-sm">
                    Crear Novedades &nbsp;
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
                  data={filteredNews}
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

export default ListNews;

