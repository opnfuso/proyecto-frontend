import React from "react";
import Navbar from "../containers/Navbar";
import Cover from "../assets/img/Cover.png";
import Avatar from "../assets/img/Avatar Wrapper.png";

function Perfil() {
  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Detalles de perfil
                </span>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="card">
              <div>
                <img className="w-100" src={Cover} alt="Cover" />
                <img
                  id="avatar-logo"
                  className="position-absolute"
                  src={Avatar}
                  alt="Avatar"
                />
              </div>
            </div>
            <form style={{ marginTop: 20 }}>
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
                          placeholder="hulkalexis@gmail.com"
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
                        <p>Contraseña</p>
                      </div>
                      <div
                        className="col-xxl-11 col-md-10 offset-md-1"
                        style={{ margin: 0 }}
                      >
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          placeholder="***************************"
                          required
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
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
