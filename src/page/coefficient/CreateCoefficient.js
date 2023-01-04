import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from "sweetalert2";
import Concept from "../../components/Elements/Concept";



const CreateCoefficient= () => {
  const navigate = useNavigate();

  
  const [coefficient, setCoefficient] = useState({
    
    concept: "",
    admonValue: 0,
    idConcept: 0,
    percentage:0
    
  });

  const { concept, admonValue, idConcept, percentage} = setCoefficient;

  


  
  const handleChange = (e) => {

   

    setCoefficient({
      ...coefficient,
      [e.target.name]: e.target.value,
    });
  };


  const createCoefficient = async () => {
    const data = {
      concept: coefficient.concept,
      admonValue: parseInt(coefficient.admonValue),
      idConcept: parseInt(coefficient.idConcept),
      percentage:parseInt(coefficient.percentage)
      
    };

    const response = await APIInvoke.invokePOST(
      `/api/Coefficient`,
      data
    );
    let msg = "";
    let icon = "";

    
    console.log(data)
    if (response.succeeded) {

      navigate("/listCoefficient");
      msg = "Registro creado exitosamente";
      icon = "success";

      setCoefficient({
        concept: "",
        admonValue: 0,
        idConcept: 0,
        percentage:0
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
    createCoefficient();
  };

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de coeficientes"}
          breadCrumb1={"Listado de coeficientes"}
          breadCrumb2={"Creación de coeficientes"}
          route={"/listCoefficient"}
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
                  <div className="col-sm-6">
                    <label>Descripción</label>
                    <input
                      type="text"
                      className="form-control"
                      id="concept"
                      name="concept"
                      value={concept}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Concept idConcept={idConcept} handleChange={handleChange} />

                   

                  <div className="col-sm-4">
                    <label>Valor administración</label>
                    <input
                      type="number"
                      className="form-control"
                      id="admonValue"
                      name="admonValue"
                      value={admonValue}
                      onChange={handleChange}
                      required
                    />
                  </div>

                 

                  <div className="col-sm-4">
                    <label>Porcentaje de coeficiente</label>
                 
                    <input type="text"  
                        className="form-control"
                        id="percentage"
                        name="percentage"
                        value={percentage}
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

export default CreateCoefficient;
