import React from "react";

const ModalInfo = ( { coefficientById} ) => {
  if(coefficientById.length > 0){
    return(
                   
       
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h4 className="modal-title">Información de coeficientes</h4>
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
                            <p style={{fontSize: '12px'}}>{coefficientById[0].coefficientType}</p>
                        </div>
                   </div>


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Valor administración</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{coefficientById[0].admonValue}</p>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Concepto:</label>
                        </div>
                        <div className="col-sm-8">
                            <p style={{fontSize: '12px'}}>{coefficientById[0].concept.name}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Porcentaje de coeficiente</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{coefficientById[0].percentage}</p>
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