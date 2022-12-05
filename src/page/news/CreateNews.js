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
import BuildingSelect from "../../components/Elements/BuildingSelect";


const CreateNews = () => {
  const navigate = useNavigate();

  
  const [news, setNews] = useState({
    building: "",
    concept: 0,
    value: 0,
    expirationDate:""
    
  });

  const { building, concept, value, expirationDate} = setNews;

  


  
  const handleChange = (e) => {

   

    setNews({
      ...news,
      [e.target.name]: e.target.value,
    });
  };


  const createNews = async () => {
    const data = {
      "idBuilding": news.code,
      "idConcept": parseInt(news.concept),
      "value": parseInt(news.value),
      "expirationDate": news.expirationDate,
    };

    const response = await APIInvoke.invokePOST(
      `/api/Invoices/news`,
      data
    );
    let msg = "";
    let icon = "";

    
    console.log(data)
    if (response.succeeded) {

      navigate("/listNews");
      msg = "Registro creado exitosamente";
      icon = "success";

      setNews({
        code: "",
        concept: 0,
        coefficient: 0,
        value: 0,
        expirationDate: "",
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
    createNews();
  };

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de Novedades"}
          breadCrumb1={"Listado de Novedades"}
          breadCrumb2={"Creación de Novedades"}
          route={"/listNews"}
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
                  <BuildingSelect />

                  <Concept concept={concept} handleChange={handleChange} />


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

export default CreateNews;
