import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";

const SeleccionUsuarios = () => {
  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Selecciona la vista
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          id="container-buttons"
          style={{ width: 369, margin: "auto auto" }}
        >
          <div className="row" style={{ marginBottom: 30 }}>
            <div className="col-md-12">
              <Link
                className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                to="/clientes"
              >
                Clientes
              </Link>
            </div>
          </div>
          <div className="row" style={{ marginBottom: 30 }}>
            <div className="col-md-12">
              <Link
                className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                to="/administradores"
              >
                Admins
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link
                className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                to="/tecnicos"
              >
                Tecnicos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionUsuarios;
