import React from "react";
import sideImage from "../assets/img/seated businessman in dark blue suit with laptop.png";
import logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";

function CreateAdministrador() {
  return (
    <>
      <div>
        <div className="row vh-100">
          <div className="col-md-6 register-container d-flex flex-column justify-content-center align-items-center">
            <form>
              <div>
                <div className="row">
                  <div className="col">
                    <h1>Registro de admin</h1>
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
                        <p>Nombre/s</p>
                      </div>
                      <div
                        className="col col-md-10 offset-md-1"
                        style={{ margin: 0 }}
                      >
                        <input
                          className="form-control"
                          type="text"
                          name="nombre"
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
                        <input
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
                        <input
                          className="form-control"
                          type="date"
                          name="nacimiento"
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
                        <input
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
                        <input
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
                        <input
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
                      className="btn btn-primary"
                      type="submit"
                      value="submit"
                    >
                      Registrar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 img-container">
            <img src={sideImage} alt="Side" />
          </div>
        </div>
        <Link
          to="/administradores"
          className="position-absolute top-0 m-2"
          href="seleccion-usuarios.html"
        >
          <img src={logo} alt="Logo" />
        </Link>
      </div>
    </>
  );
}

export default CreateAdministrador;