import React, { useEffect, useState } from "react";
import ListClientes from "../containers/ListClientes";
import Navbar from "../containers/Navbar";
import { getClientesRequest } from "../api/cliente.api";
import { Link } from "react-router-dom";

const VistaClientes = () => {
  const [clientes, setClientes] = useState([]);

  const loadClientes = async () => {
    try {
      const response = await getClientesRequest();
      setClientes(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadClientes();
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
                  Clientes
                </span>
              </div>
              <Link
                to="/new/cliente"
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
                  <ListClientes clientes={clientes} key={clientes.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VistaClientes;
