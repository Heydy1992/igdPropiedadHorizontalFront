import React from "react";

const ModalInfo = ( { maintenanceById} ) => {
  if(maintenanceById.length > 0){
    return(
                   
       
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h4 className="modal-title">Información de Mantenimientos</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   
                   <div className="row">
                        <div className="col-sm-3">
                            <label>Activo:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].maintenanceActive}</p>
                        </div>
                   </div>


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Estado</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].maintenanceState}</p>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Tipo:</label>
                        </div>
                        <div className="col-sm-8">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].maintenanceType}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Programación:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].maintenanceProgramming}</p>
                        </div>
                   </div> 


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Periodo</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].period}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Cantidad:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].quantity}</p>
                        </div>
                   </div>      

                     <div className="row">
                        <div className="col-sm-3">
                            <label>Fecha de inicio:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].initialDate}</p>
                        </div>
                   </div>   

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Valor:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].cost}</p>
                        </div>
                   </div>   

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Responsable:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].responsible}</p>
                        </div>
                   </div>   

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Observación:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{maintenanceById[0].observation}</p>
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