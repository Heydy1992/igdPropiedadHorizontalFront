import React from "react";

const ModalInfo = ( { userById} ) => {
  if(userById.length > 0){
    return(
                   
       
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header bg-danger">
                    <h4 className="modal-title">Información del usuario</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   
                   <div className="row">
                        <div className="col-sm-3">
                            <label>usuario:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].userName}</p>
                        </div>
                   </div>


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Rol</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].role}</p>
                        </div>
                   </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Nombre:</label>
                        </div>
                        <div className="col-sm-8">
                            <p style={{fontSize: '12px'}}>{`${userById[0].person.firstName} ${userById[0].person.middleName} ${userById[0].person.firstlastName} ${userById[0].person.secondLastName}` }</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Documento:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].person.document}</p>
                        </div>
                   </div> 


                    <div className="row">
                        <div className="col-sm-3">
                            <label>Departamento</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].person.department.name}</p>
                        </div>
                   </div>    

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Ciudad:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].person.city.name}</p>
                        </div>
                   </div>      

                     <div className="row">
                        <div className="col-sm-3">
                            <label>Sexo:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].person.gender === "F" ? "FEMENINO" : "MASCULINO"}</p>
                        </div>
                   </div>   

                   <div className="row">
                        <div className="col-sm-3">
                            <label>Email:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].person.dataContact[0].email}</p>
                        </div>
                   </div>   

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Telefono:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].person.dataContact[0].phone}</p>
                        </div>
                   </div>   

                    <div className="row">
                        <div className="col-sm-3">
                            <label>Dirección:</label>
                        </div>
                        <div className="col-sm-4">
                            <p style={{fontSize: '12px'}}>{userById[0].person.dataContact[0].address}</p>
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