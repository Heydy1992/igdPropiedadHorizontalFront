import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from '../../components/home/ContentHeader'
import Footer from '../../components/home/Footer'
import NavBar from '../../components/menu/NavBar'
import SidebarContainer from '../../components/menu/SidebarContainer'
import APIInvoke from '../../utils/APIInvoke'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPenToSquare,
  faTrash,
  faPrint,
  faSave,
} from '@fortawesome/free-solid-svg-icons';
import DataTable from 'react-data-table-component';
import 'styled-components';
import '../../css/dataTable.css';
import Swal from "sweetalert2";
import ModalInfo from "./ModalInfo";

const ListBuilding = () => {
  const [commonArea, setCommonArea] = useState([])
  const [commonAreaById, setCommonAreaById] = useState([]);

  //filtros
  const [search, setSearch] = useState('')
  const [filteredCommonArea, setFilteredCommonArea] = useState([])

   //Paginación
   const [totalRows, setTotalRows] = useState(0);
   const [perPage, setPerPage] = useState(10);

  //Listar Areas comunes
  const listCommonArea = async (page) => {
    const response = await APIInvoke.invokeGET(`/api/CommonArea?page=${page}&pageSize=${perPage}`);
    setCommonArea(response.items)
    setTotalRows(response.totalItems);
    setFilteredCommonArea(response.items)
  };

   //Consultar areas por id
   const handleCommonAreaById = (id) => {

    const commonAreaId = commonArea.filter(item => item.id === id);
    setCommonAreaById(commonAreaId);
   

   
    
  }

  //Paginacion
  const handlePageChange = (page) => {
    listCommonArea(page);
  
  }

  const handlePerRowsChange = async (newPerPage, page) => {
    const response = await APIInvoke.invokeGET(`/api/CommonArea?page=${page}&pageSize=${newPerPage}`);
    
    setCommonArea(response.items);
    setFilteredCommonArea(response.items);
    setPerPage(newPerPage);
  };

  
  //Anular areas comunes
  const deleteCommonArea = async (id) => {
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
        return APIInvoke.invokePOST(`/api/CommonArea/state`,data);
        
        
      }
    }).then((response)=>{
        
        if(response.succeeded){
          
          Swal.fire(
            'Anulación',
            'El Inmueble ha sido anulado con exito!',
            'success'
          );
          listCommonArea(1);
          
          
        }
    }).catch((err) => {
      err.succeeded =false
    })
    

    
  }

  useEffect(() => {
    listCommonArea(1);
  }, [])

  //Filtro para buscar

  useEffect(() => {
    const result = commonArea.filter((commonArea) => {
      return commonArea.name.toLowerCase().match(search.toLowerCase())
    })
    setFilteredCommonArea(result)
  },[search])

  //Columnas configuracion para el dataTable
  const columns = [
    {
      name: 'Descripción',
      selector: (row) => row.name,
      sortable: true,
    },

    {
      name: 'Precio',
      selector: (row) => row.price,
      sortable: true,
    },

    {
      name: 'Opciones',
      cell: (row) => (
        <>
          <Link to={'#'} className="btn btn-sm btn-info">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
          &nbsp;
          <button
                
                className="btn btn-sm btn-primary" 
                data-toggle="modal"
                data-target="#modal-lg"
                onClick={() => {handleCommonAreaById(row.id)}}
                disabled={!row.state && "disabled" }
              >
                <FontAwesomeIcon icon={faPrint} />
              </button>
          &nbsp;
          <button
                
                className="btn btn-sm btn-danger anular" 
                onClick={() => {deleteCommonArea(row.id)}}
                disabled={!row.state && "disabled" }
               
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
        </>
      ),
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
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selecetAllNowsItem: true,
    selectAllNowsItemText: 'Todos',
  }

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          breadCrumb1={'Inicio'}
          breadCrumb2={'Area común'}
          route={'#'}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Listado de Area común</h3>
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
                    to={'/createCommonArea'}
                    className="btn btn-block btn-info btn-sm"
                  >
                    Crear Area comun &nbsp;
                    <FontAwesomeIcon icon={faSave} />
                  </Link>
                </div>
              </div>

              <div className="row">&nbsp;</div>
              <div className="card">
                <DataTable
                  columns={columns}
                  data={filteredCommonArea}
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
                  subHeaderAlign="right"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />

      <div className="modal fade" id="modal-lg">
        <ModalInfo commonAreaById={ commonAreaById } />
      </div>  
    </div>
  )
}

export default ListBuilding
