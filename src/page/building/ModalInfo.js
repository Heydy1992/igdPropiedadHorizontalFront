import React from "react";

const ModalInfo = ( { buildingById} ) => {
  if(buildingById.length > 0){
    return(
                   
       
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h4 className="modal-title">Información de inmueble</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   
                   <div className="row">
                        <div className="col-sm-4">
                            <label>Codigo de inmueble:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{buildingById[0].codeBuilding}</p>
                        </div>
                   </div>


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Propetario:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{buildingById[0].owner}</p>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Tipo:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{buildingById[0].type}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Destino:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{buildingById[0].destination}</p>
                        </div>
                   </div> 


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Estado:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{buildingById[0].buildingState}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Zona:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{buildingById[0].zone}</p>
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