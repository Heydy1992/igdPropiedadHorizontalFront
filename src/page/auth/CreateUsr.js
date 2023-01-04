import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DepartamentAndCity from "../../components/Elements/DepartamentAndCity";
import ContentHeader from "../../components/home/ContentHeader";
import Footer from "../../components/home/Footer";
import NavBar from "../../components/menu/NavBar";
import SidebarContainer from "../../components/menu/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import Swal from "sweetalert2";

const CreateUsr = () => {
  const navigate = useNavigate();

  const [person, setPerson] = useState({
    userName: "",
    password: "",
    document: "",
    documentType: 0,
    role: 0,
    firstLastName: "",
    secondLastName: "",
    firstName: "",
    middleName: "",
    department: 0,
    city: 0,
    gender: 0,
    email: "",
    phone: "",
    address: "",
  });

  const {
    userName,
    document,
    documentType,
    role,
    firstLastName,
    secondLastName,
    firstName,
    middleName,
    department,
    city,
    gender,
    email,
    phone,
    address,
  } = person;

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });

 
  };

  const createUser = async () => {
    const data = {
      user: {
        userName: person.userName,
        person: {
          firstName: person.firstName,
          middleName: person.middleName,
          firstLastName: person.firstLastName,
          secondLastName: person.secondLastName,
          document: person.document,
          department: person.department,
          city: person.city,
          Gender: parseInt(person.gender),
          role: parseInt(person.role),
          documentType: parseInt(person.documentType),
          dataContact: {
            email: person.email,
            phone: person.phone,
            address: person.address,
            typePhone: 1,
          },
        },
        password: person.document,
      },
    };

    const response = await APIInvoke.invokePOST(`/api/Auth/register`, data);
    console.log(data);
    let msg = "";
    let icon = "";
    if (response.succeeded) {
      navigate("/listUsr");
      msg = "Registro creado exitosamente";
      icon = "success";
      setPerson({
        document: "",
        documentType: 0,
        role: 0,
        firstLastName: "",
        secondLastName: "",
        firstName: "",
        middleName: "",
        department: 0,
        city: 0,
        gender: 0,
        email: "",
        phone: "",
        address: "",
      });
    } else {
      console.log(response.errors[0]);
        switch (response.errors[0]) {
        case "The City or Department not exists!":
          msg="Selecciona un departamento y/o Ciudad"
          break;

        case "The document already exists!":
          msg= "El Documento de identidad ya existe";
          
          break;

        case "El usuario ya existe!":
          msg= "El usuario ya existe!";
          break;

        default:
          break;
      }
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
    createUser();
  };

  return (
    <div className="wrapper">
      <NavBar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          title={"Creación de Usuarios"}
          breadCrumb1={"Listado de Usuarios"}
          breadCrumb2={"Creación de Usuarios"}
          route={"/listUsr"}
        />
        <section className="content">
          <div className="card">
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
                  <div className="col-6">
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
                  <div className="col-sm-6">
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
                        <option>Tipo de documento</option>
                        <option value={1}>CC</option>
                        <option value={2}>TI</option>
                        <option value={3}>Pasaporte</option>
                        <option value={4}>NIT</option>
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

                  <DepartamentAndCity
                    department={department}
                    city={city}
                    handleChange={handleChange}
                  />

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
                        <option>Selecciona el sexo</option>
                        <option value={1}>Mujer</option>
                        <option value={2}>Hombre</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card card-danger">
                      <div className="card-header">
                        <h3 className="card-title">Datos de acceso</h3>
                      </div>
                      <div className="row card-body">
                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>Nombre de usuario</label>
                          <input
                            type="text"
                            className="form-control"
                            id="userName"
                            name="userName"
                            value={userName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <div className="form-group">
                          <label>ROL</label>
                          <select
                            className="form-control"
                            id="role"
                            name="role"
                            value={role}
                            onChange={handleChange}
                            required
                          >
                            <option>Selecciona tipo de usuario</option>
                            <option value={1}>Administrador</option>
                            <option value={2}>Usuario</option>
                          </select>
                        </div>
                      </div>

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

export default CreateUsr;
