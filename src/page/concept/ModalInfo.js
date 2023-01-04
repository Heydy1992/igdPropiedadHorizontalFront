import React from "react";

const ModalInfo = ( { conceptById} ) => {
  if(conceptById.length > 0){
    return(
                   
       
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h4 className="modal-title">Información de Conceptos</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   
                   <div className="row">
                        <div className="col-sm-4">
                            <label>Detalle:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{conceptById[0].name}</p>
                        </div>
                   </div>


                    <div className="row">
                        <div className="col-sm-4">
                            <label>Cuenta de ingreso</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{conceptById[0].revenueAccount}</p>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <label>Cuenta cliente:</label>
                        </div>
                        <div className="col-sm-8">
                            <p style={{fontSize: '12px'}}>{conceptById[0].codCue}</p>
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