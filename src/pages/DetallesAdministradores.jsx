import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import avatar from "../assets/img/Avatar Wrapper.png";
import cover from "../assets/img/Cover.png";
import { Field, Formik } from "formik";
import { getAdministradorRequest } from "../api/administrador.api";
import { useParams } from "react-router-dom";

const DetallesAdministradores = () => {
  const [administrador, setAdministrador] = useState({});
  const params = useParams();

  const loadAdministrador = async (id) => {
    const res = await getAdministradorRequest(id);

    const admin = {
      nombres: res.data.nombres,
      apellidos: res.data.apellidos,
      telefono: res.data.telefono,
      fechaNacimiento: res.data.fecha_nacimiento.split("T")[0],
      email: res.data.email,
    };

    setAdministrador(admin);
  };

  useEffect(() => {
    loadAdministrador(params.id);
  });
  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Detalles de administrador
                </span>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="card">
              <div>
                <img className="w-100" src={cover} alt="Cover" />
                <img
                  id="avatar-logo"
                  className="position-absolute"
                  src={avatar}
                  alt="Avatar"
                />
              </div>
            </div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                nombres: administrador.nombres,
                apellidos: administrador.apellidos,
                telefono: administrador.telefono,
                fechaNacimiento: administrador.fechaNacimiento,
                email: administrador.email,
                password: administrador.password,
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                  <div>
                    <div
                      className="row"
                      style={{ marginTop: 10, marginRight: 0, marginLeft: 0 }}
                    >
                      <div className="col">
                        <div className="row">
                          <div
                            className="col col-md-8 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <p>Nombre/s</p>
                          </div>
                          <div
                            className="col col-md-10 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <Field
                              className="form-control"
                              type="text"
                              name="nombres"
                              placeholder="Saul Alexis"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col col-md-8 offset-md-1">
                            <p>Apellidos</p>
                          </div>
                          <div className="col col-md-10 offset-md-1">
                            <Field
                              className="form-control"
                              type="text"
                              name="apellidos"
                              placeholder="Perez Rincon"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginTop: 10, marginRight: 0, marginLeft: 0 }}
                    >
                      <div className="col">
                        <div className="row">
                          <div
                            className="col col-md-8 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <p>Fecha de nacimiento</p>
                          </div>
                          <div
                            className="col col-md-10 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <Field
                              className="form-control"
                              type="date"
                              name="fechaNacimiento"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col col-md-8 offset-md-1">
                            <p>Telefono</p>
                          </div>
                          <div className="col col-md-10 offset-md-1">
                            <Field
                              className="form-control"
                              type="tel"
                              name="telefono"
                              placeholder={3314678934}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="row"
                      style={{ marginTop: 10, marginRight: 0, marginLeft: 0 }}
                    >
                      <div className="col">
                        <div className="row">
                          <div
                            className="col col-md-8 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <p>Email</p>
                          </div>
                          <div
                            className="col col-md-10 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <Field
                              className="form-control"
                              type="email"
                              name="email"
                              placeholder="ejemplo@gmail.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col col-md-8 offset-md-1">
                            <p>Password</p>
                          </div>
                          <div className="col offset-xl-1 col-md-10 offset-md-1">
                            <Field
                              className="form-control"
                              type="password"
                              name="password"
                              required
                              placeholder="********"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col d-flex align-items-center justify-content-center"
                        style={{ marginTop: 50 }}
                      >
                        <button
                          className="btn btn-primary btn-detalles"
                          type="submit"
                          value="submit"
                          style={{ marginRight: 55 }}
                          disabled={isSubmitting}
                        >
                          Guardar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

// DetallesAdministradores.propTypes = {
//   id: PropTypes.number,
//   nombres: PropTypes.string,
//   apellidos: PropTypes.string,
//   telefono: PropTypes.string,
//   fechaNacimiento: PropTypes.string,
//   email: PropTypes.string,
//   password: PropTypes.string,
// };

export default DetallesAdministradores;
