import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";

const CreateOwner = () => {
  const [person, setPerson] = useState({
    document: "",
    documentType: "",
    rol: "",
    firstLastName: "",
    secondLastName: "",
    firstName: "",
    middleName: "",
    departament: "",
    city: "",
    gender: "",
  });

  const {
    document,
    documentType,
    rol,
    firstLastName,
    secondLastName,
    firstName,
    middleName,
    departament,
    city,
    gender,
  } = person;






  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de propetarios"}
          breadCrumb1={"Listado de propetarios"}
          breadCrumb2={"Creación de propetarios"}
          route={"/listOwner"}
        />
        <section className="content">
          <div className="card card-danger">
            
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <Link className="btn btn-app bg-primary">
                    <i className="fas fa-save"></i> Grabar
                  </Link>
                  <div className="col-sm-3">
                    <Link className="btn btn-app bg-danger">
                      <i className="fa fa-ban"></i> Cancelar
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <label>Documento</label>
                    <input
                      type="text"
                      className="form-control"
                      id="document"
                      name="document"
                      value={document}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Tipo Documento</label>
                      <select
                        className="form-control"
                        id="documentType"
                        name="documentType"
                        value={documentType}
                        onChange={handleChange}
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
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>ROL</label>
                      <select
                        className="form-control"
                        id="rol"
                        name="rol"
                        value={rol}
                        onChange={handleChange}
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

                  <div className="col-6">
                    <label>Primer Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstLastName"
                      name="firstLastName"
                      value={firstLastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label>Segundo Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      id="secondLastName"
                      name="secondLastName"
                      value={secondLastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-6">
                    <label>Primer Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <label>Segundo Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      id="middleName"
                      name="middleName"
                      value={middleName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Departamento</label>
                      <select
                        className="form-control"
                        id="departament"
                        name="departament"
                        value={departament}
                        onChange={handleChange}
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
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Ciudad</label>
                      <select
                        className="form-control"
                        id="city"
                        name="city"
                        value={city}
                        onChange={handleChange}
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
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Sexo</label>
                      <select
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={gender}
                        onChange={handleChange}
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
              </form>
            </div>
          </div>  
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CreateOwner;
