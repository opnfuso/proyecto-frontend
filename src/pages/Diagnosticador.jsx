import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";

function Diagnosticador() {
  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Diagnosticador
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Marca</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <select>
                    <optgroup label="This is a group">
                      <option value={12} selected>
                        This is item 1
                      </option>
                      <option value={13}>This is item 2</option>
                      <option value={14}>This is item 3</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select>
                    <optgroup label="This is a group">
                      <option value={12} selected>
                        This is item 1
                      </option>
                      <option value={13}>This is item 2</option>
                      <option value={14}>This is item 3</option>
                    </optgroup>
                  </select>
                </td>
                <td>
                  <select>
                    <optgroup label="This is a group">
                      <option value={12} selected>
                        This is item 1
                      </option>
                      <option value={13}>This is item 2</option>
                      <option value={14}>This is item 3</option>
                    </optgroup>
                  </select>
                </td>
              </tr>
              <tr />
            </tbody>
          </table>
        </div>
        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          id="container-buttons"
          style={{ width: 369, margin: "auto auto" }}
        >
          <div className="row">
            <div className="col-md-12">
              <Link
                to="general"
                className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                href="vista-admins.html"
                style={{ marginBottom: 30 }}
              >
                Iniciar diagnostico
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <a
                className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                href="diagnostico-rapido.html"
              >
                Llenado rapido
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnosticador;
