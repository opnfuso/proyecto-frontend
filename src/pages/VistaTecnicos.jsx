import React, { useEffect, useState } from "react";
import ListTecnicos from "../containers/ListTecnicos";
import Navbar from "../containers/Navbar";
import { getTecnicosRequest } from "../api/tecnico.api";
import { Link } from "react-router-dom";

const VistaTecnicos = () => {
  const [tecnicos, setTecnicos] = useState([]);

  const loadTecnicos = async () => {
    try {
      const response = await getTecnicosRequest();
      setTecnicos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadTecnicos();
  }, []);

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Tecnicos
                </span>
              </div>
              <Link
                to="/new/tecnico"
                className="btn btn-primary btn-agregar-usuario"
                href="#"
              >
                Agregar nuevo +
              </Link>
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
                  <ListTecnicos tecnicos={tecnicos} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaTecnicos;
