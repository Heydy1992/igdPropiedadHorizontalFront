import React from "react";

const ModalInfo = ( { buildingById} ) => {
  if(buildingById.length > 0){
    return(
                   
       
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Información de inmueble</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                            <label style={{fontSize: '12px'}}>{buildingById[0].codeBuilding}</label>
                            <div></div>
                            <label>Propetario:</label>
                            <label style={{fontSize: '12px'}}>{buildingById[0].owner}</label>
                            <div></div>
                            <label>Tipo:</label>
                            <label style={{fontSize: '12px'}}>{buildingById[0].type}</label>
                            <div></div>
                            <label>Destino:</label>
                            <label style={{fontSize: '12px'}}>{buildingById[0].destination}</label>
                            <div></div>
                            <label>Estado:</label>
                            <label style={{fontSize: '12px'}}>{buildingById[0].buildingState}</label>
                            <div></div>
                            <label>Zona:</label>
                            <label style={{fontSize: '12px'}}>{buildingById[0].zone}</label>
                             
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