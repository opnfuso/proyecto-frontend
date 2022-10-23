import React, { useEffect, useState } from "react";
import ListDispositivos from "../containers/ListDispositivos";
import Navbar from "../containers/Navbar";
import { getDispositivosRequest } from "../api/dispositivo.api";

function VistaDispositivos() {
  const [dispositivos, setDispositivos] = useState([]);

  const getDispositivos = async () => {
    const res = await getDispositivosRequest();

    setDispositivos(res.data);
  };

  useEffect(() => {
    getDispositivos();
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
                  Dispositivos
                </span>
              </div>
              <a
                className="btn btn-primary btn-agregar-usuario"
                href="registro-dispositivo.html"
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
                  <ListDispositivos dispositivos={dispositivos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaDispositivos;
