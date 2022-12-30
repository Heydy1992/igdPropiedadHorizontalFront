import React from "react";

const ModalInfo = ( { ownerById} ) => {
  if(ownerById.length > 0){
    return(
                   
       
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h4 className="modal-title">Información del Propetario</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   
                    <div className="row">
                        <div className="col-sm-3">
                            <label>Nombre:</label>
                        </div>
                        <div className="col-sm-8">
                            <p style={{fontSize: '12px'}}>{`${ownerById[0].firstName} ${ownerById[0].middleName} ${ownerById[0].firstlastName} ${ownerById[0].secondLastName}` }</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Documento:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{ownerById[0].document}</p>
                        </div>
                   </div> 


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Departamento</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{ownerById[0].department.name}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Ciudad:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{ownerById[0].city.name}</p>
                        </div>
                   </div>      

                     <div className="row">
                        <div className="col-sm-3">
                            <label>Sexo:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{ownerById[0].gender === "F" ? "FEMENINO" : "MASCULINO"}</p>
                        </div>
                   </div>   

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Email:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{ownerById[0].dataContact[0].email}</p>
                        </div>
                   </div>   

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Telefono:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{ownerById[0].dataContact[0].phone}</p>
                        </div>
                   </div>   

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Dirección:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{ownerById[0].dataContact[0].address}</p>
                        </div>
                   </div>               
                           
                </div>
            <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cerrar</button>
        
            </div>
        </div>
     </div>   
 
  


)



  }
    
}

export default ModalInfo;