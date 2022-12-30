import React from "react";

const ModalInfo = ( { tariffById} ) => {
  if(tariffById.length > 0){
    return(
                   
       
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h4 className="modal-title">Información de tarifas</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   
                   <div className="row">
                        <div className="col-sm-3">
                            <label>Nombre:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{commonAreaById[0].name}</p>
                        </div>
                   </div>


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Horas Maximas:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{commonAreaById[0].maxHour}</p>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Hora minima:</label>
                        </div>
                        <div className="col-sm-8">
                            <p style={{fontSize: '12px'}}>{commonAreaById[0].minHour}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Precio:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{commonAreaById[0].price}</p>
                        </div>
                   </div> 


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Reservable</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{commonAreaById[0].reserved}</p>
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