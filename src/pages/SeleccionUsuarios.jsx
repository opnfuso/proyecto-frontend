import React, { Component } from "react";
import Navbar from "../containers/Navbar";

export class SeleccionUsuarios extends Component {
  render() {
    return (
      <div id="wapper">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand-md py-3">
              <div className="container d-flex justify-content-between">
                <a className="navbar-brand d-flex align-items-center" href="#">
                  <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                    Selecciona la vista
                  </span>
                </a>
              </div>
            </nav>
          </div>
          <div
            className="container d-flex flex-column align-items-center justify-content-center"
            id="container-buttons"
            style={{ width: 369, margin: "auto auto" }}
          >
            <div className="row">
              <div className="col-md-12">
                <a
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  href="vista-clientes.html"
                >
                  Clientes
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <a
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  href="vista-admins.html"
                >
                  Admins
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <a
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  href="vista-tecnicos.html"
                >
                  Tecnicos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeleccionUsuarios;
