import React, { Component } from "react";
import Navbar from "../containers/Navbar";

export class VistaClientes extends Component {
  render() {
    return (
      <div id="wapper">
        <Navbar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand-md py-3">
              <div className="container d-flex justify-content-between">
                <div
                  className="navbar-brand d-flex align-items-center"
                  href="#"
                >
                  <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                    Clientes
                  </span>
                </div>
                <a
                  className="btn btn-primary btn-agregar-usuario"
                  href="registro-cliente.html"
                >
                  Agregar nuevo +
                </a>
              </div>
            </nav>
            <div className="container-fluid">
              <div className="card shadow">
                <div className="card-body">
                  <div
                    className="table-responsive table mt-2"
                    id="dataTable-1"
                    role="grid"
                    aria-describedby="dataTable_info"
                  >
                    <table className="table my-0" id="dataTable">
                      <thead>
                        <tr>
                          <th>Nombre</th>
                          <th>Telefono</th>
                          <th>Domicilio</th>
                          <th>Editar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Airi Satou</td>
                          <td>3314567832</td>
                          <td>Fray Francisco palou 675</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-edit" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Angelica Ramos</td>
                          <td>3314567832</td>
                          <td>Fray Francisco palou 675</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-edit" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Ashton Cox</td>
                          <td>3314567832</td>
                          <td>Fray Francisco palou 675</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-edit" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Bradley Greer</td>
                          <td>3314567832</td>
                          <td>Fray Francisco palou 675</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-edit" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Brenden Wagner</td>
                          <td>3314567832</td>
                          <td>Fray Francisco palou 675</td>
                          <td>
                            <a href="#">
                              <i className="fas fa-edit" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr />
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VistaClientes;
