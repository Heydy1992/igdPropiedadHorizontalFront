import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DepartamentAndCity from "../../components/Elements/DepartamentAndCity";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from "sweetalert2";

const CreateCommonArea = () => {
  const navigate = useNavigate();

  const [commonArea, setCommonArea] = useState({
    code: "",
    name: "",
    price: 0,
    fraction: 0,
    minHour: 0,
    maxHour: 0,
    observation: "",
    reserved: 0,
  });

  const {
    code,
    name,
    price,
    fraction,
    minHour,
    maxHour,
    observation,
    reserved,
  } = commonArea;

  const handleChange = (e) => {
    setCommonArea({
      ...commonArea,
      [e.target.name]: e.target.value,
    });
  };

  const createCommonArea = async () => {
    const data = {
      "code": commonArea.code,
      "name": commonArea.name,
      "price": parseInt(commonArea.price),
      "fraction": parseInt(commonArea.fraction),
      "minHour": parseInt(commonArea.minHour),
      "maxHour": parseInt(commonArea.maxHour),
      "observation": commonArea.observation,
      "reserved":  commonArea.reserved === 1 ? true : false,
    };

    const response = await APIInvoke.invokePOST(`/api/CommonArea`, data);
    let msg = "";
    let icon = "";
    console.log(data.reserved)
    console.log(response)
    if (response.succeeded) {
      navigate("/listCommonArea");
      msg = "Registro creado exitosamente";
      icon = "success";
      setCommonArea({
        code: "",
        name: "",
        price: 0,
        fraction: 0,
        minHour: 0,
        maxHour: 0,
        observation: "",
        reserved: 0,
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
    createCommonArea();
  };

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de area común"}
          breadCrumb1={"Listado de area común"}
          breadCrumb2={"Creación de area comnún"}
          route={"/listCommonArea"}
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
                    <label>Codigo</label>
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

                  <div className="col-sm-4">
                    <label>Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <label>Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={price}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <label>Fracción</label>
                    <input
                      type="number"
                      className="form-control"
                      id="fraction"
                      name="fraction"
                      value={fraction}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <label>Hora Minima</label>
                    <input
                      type="number"
                      className="form-control"
                      id="minHour"
                      name="minHour"
                      value={minHour}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <label>Hora Maximax</label>
                    <input
                      type="number"
                      className="form-control"
                      id="maxHour"
                      name="maxHour"
                      value={maxHour}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div class="col-sm-8">
                    <div class="form-group">
                      <label>Observación</label>
                      <textarea
                        className="form-control"
                        id="observation"
                        name="observation"
                        value={observation}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <div className="col-sm-2">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="reserved"
                          name="reserved"
                          value={reserved}
                          onChange={handleChange}
                          
                        />
                        <label className="form-check-label">Reservable</label>
                      </div>
                    </div>
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

export default CreateCommonArea;
