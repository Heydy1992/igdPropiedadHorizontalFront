import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from "sweetalert2";




const CreateConcept= () => {
  const navigate = useNavigate();

  
  const [concept, setConcept] = useState({
    
    namer: "",
    revenueAccount: "",
    codCue: "",
    
    
  });

  const { namer, revenueAccount, codCue} = setConcept;

  


  
  const handleChange = (e) => {

   

    setConcept({
      ...concept,
      [e.target.name]: e.target.value,
    });
  };


  const createConcept = async () => {
    const data = {
      name: concept.namer,
      revenueAccount: concept.revenueAccount,
      codCue: concept.codCue,
      
    };

    const response = await APIInvoke.invokePOST(
      `/api/Invoices/concepts`,
      data
    );
    let msg = "";
    let icon = "";

    
    console.log(data)
    if (response.succeeded) {

      navigate("/listConcept");
      msg = "Registro creado exitosamente";
      icon = "success";

      setConcept({
        namer: "",
        revenueAccount: "",
        codCue: "",
      });
    } else {
      msg = "Por favor verificar los datos ingresados";
      icon = "error";
    }
    Swal.fire({
      title: "",
      text: msg,
      icon: icon,
      showConfirmButton: false,
      showDenyButton: true,
      denyButtonText: "Aceptar",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createConcept();
  };

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de conceptos"}
          breadCrumb1={"Listado de conceptos"}
          breadCrumb2={"Creación de conceptos"}
          route={"/listConcept"}
        />
        <section className="content">
          <div className="card card-danger">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <button type="submit" className="btn btn-app bg-primary">
                    <i className="fas fa-save"></i> Grabar
                  </button>
                  <div className="col-sm-3">
                    <Link className="btn btn-app bg-danger">
                      <i className="fa fa-ban"></i> Cancelar
                    </Link>
                  </div>
                </div>

                <div className="row">
                <div className="col-sm-4">
                    <label>Detalle</label>
                    <input
                      type="text"
                      className="form-control"
                      id="namer"
                      name="namer"
                      value={namer}
                      onChange={handleChange}
                      required
                    />
                  </div>

                 

                   

                  <div className="col-sm-4">
                    <label>Cuenta de ingreso</label>
                    <input
                      type="text"
                      className="form-control"
                      id="revenueAccount"
                      name="revenueAccount"
                      value={revenueAccount}
                      onChange={handleChange}
                      required
                    />
                  </div>

                 

                  <div className="col-sm-4">
                    <label>Cuenta de cliente</label>
                 
                    <input type="text"  
                        className="form-control"
                        id="codCue"
                        name="codCue"
                        value={codCue}
                        onChange={handleChange}
                        required/>
                  </div>  

                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CreateConcept;
