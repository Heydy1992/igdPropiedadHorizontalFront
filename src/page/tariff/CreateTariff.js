import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from "sweetalert2";
import Concept from "../../components/Elements/Concept";
import Coefficient from "../../components/Elements/Coefficient";


const CreateTariff = () => {
  const navigate = useNavigate();

  
  const [tariff, setTariff] = useState({
    namer: "",
    code:"",
    idConcept: 0,
    idCoefficient: 0, 
    value: 0,
    expirationDate:""
    
  });

  const { namer, code, idConcept, idCoefficient, value, expirationDate} = setTariff;

  


  
  const handleChange = (e) => {

   

    setTariff({
      ...tariff,
      [e.target.name]: e.target.value,
    });
  };


  const createTariff = async () => {
    const data = {
      "name" : tariff.namer,
      "code":tariff.code,
      "idConcept": parseInt(tariff.idConcept),
      "idCoefficient": parseInt(tariff.idCoefficient),
      "value": parseInt(tariff.value),
      "expirationDate": tariff.expirationDate,
    };

    const response = await APIInvoke.invokePOST(
      `/api/Invoices/tariffs`,
      data
    );
    let msg = "";
    let icon = "";

    
    console.log(data)
    if (response.succeeded) {

      navigate("/listTariff");
      msg = "Registro creado exitosamente";
      icon = "success";

      setTariff({
        namer: "",
        code:"",
        idConcept: 0,
        idCoefficient: 0,
        value: 0,
        expirationDate: new Date(),
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
    createTariff();
  };

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de tarifas"}
          breadCrumb1={"Listado de tarifas"}
          breadCrumb2={"Creación de tarifas"}
          route={"/listTariff"}
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
                    <label>Codido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="code"
                      name="code"
                      value={code}
                      onChange={handleChange}
                      required
                    />
                  </div>


                 

                  <Concept idConcept={idConcept} handleChange={handleChange} />

                  <Coefficient idCoefficient={idCoefficient} handleChange={handleChange}/>

                  <div className="col-sm-4">
                    <label>Valor</label>
                    <input
                      type="number"
                      className="form-control"
                      id="value"
                      name="value"
                      value={value}
                      onChange={handleChange}
                      required
                    />
                  </div>

                 

                  <div className="col-sm-4">
                    <label>Fecha de vencimiento</label>
                 
                    <input type="date"  
                        className="form-control"
                        id="expirationDate"
                        name="expirationDate"
                        value={expirationDate}
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

export default CreateTariff;
