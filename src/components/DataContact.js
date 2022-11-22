import React from 'react';

const DataContact = () => {

    return(

        <div className="row">
            <div className="col-md-4">
                <div className="card card-danger">
                    <div className="card-header">
                        <h3 className="card-title">Datos de contacto</h3>
                    </div>
                    <div className="form-group col-md-10">
                        <label>Dirección</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-street-view"></i></span>
                            </div>
                            <input type="text" className="form-control"/>
                            
                        </div>
                    </div>
                    <div>  
                    <div className="form-group col-md-8">
                        <label>Telefono</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-phone"></i></span>
                            </div>
                            <input type="text" className="form-control" data-inputmask='"mask": "(999) 999-9999"' data-mask />
                            <div className="form-group col-md-4">
                            <select className="form-control" 
                                id="documentType"
                                name="documentType"
                                required
                            >
                                <option>option 1</option>
                                <option>option 2</option>
                                <option>option 3</option>
                                <option>option 4</option>
                                <option>option 5</option>
                            </select>
                            </div>
                            
                        </div>

                    </div>  
                    </div>


                    <div className="form-group col-md-8">
                        <label>Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                            </div>
                            <input type="email" class="form-control" />
                        </div>
                    </div>  
                </div> 
                
            </div> 
            
             
        </div> 
            
    );       
}

export default DataContact;