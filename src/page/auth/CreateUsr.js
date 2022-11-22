import React from 'react';
import PersonGeneral from '../../components/PersonGeneral';


const CreateUsr = () => {


    return(
        <div className="content-wrapper">
            <div className="card card-danger">
                <div className="card-header">
                    <h3 className="card-title">Creación De Usuarios</h3>
                </div>

                <PersonGeneral />
              
            </div>

            
        </div>   
    );
}


export default CreateUsr;