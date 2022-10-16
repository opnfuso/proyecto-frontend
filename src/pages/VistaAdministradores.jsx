import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import { getAdministradoresRequest } from "../api/administrador.api";
import ListAdministradores from "../containers/ListAdministradores";

const VistaAdministradores = () => {
  const [administradores, setAdministradores] = useState([]);

  const loadAdministradores = async () => {
    try {
      const response = await getAdministradoresRequest();
      console.log(response.data);
      setAdministradores(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAdministradores();
  }, []);

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Admins
                </span>
              </div>
              <a className="btn btn-primary btn-agregar-usuario" href="#">
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
                  <ListAdministradores administradores={administradores} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaAdministradores;
