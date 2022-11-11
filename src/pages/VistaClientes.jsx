import React, { useEffect, useState } from "react";
import ListClientes from "../containers/ListClientes";
import Navbar from "../containers/Navbar";
import { getClientesRequest } from "../api/cliente.api";
import { Link } from "react-router-dom";

const VistaClientes = () => {
  const [clientes, setClientes] = useState([]);
  const [search, setSearch] = useState([]);

  const loadClientes = async () => {
    try {
      const response = await getClientesRequest();
      setClientes(response.data);
      setSearch(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (e) => {
    const s = e.target.value;

    if (s.length === 0) {
      setSearch(clientes);
    } else {
      let ser = [];

      clientes.forEach((cli) => {
        const str =
          `${cli.nombres} ${cli.apellidos} ${cli.email} ${cli.telefono}`.toLowerCase();

        if (str.includes(s.toLowerCase())) {
          ser.push(cli);
        }
      });

      setSearch(ser);

      console.log(search);
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
              <form className="d-flex" role="search">
                <input
                  onChange={(e) => {
                    handleSearchChange(e);
                  }}
                  style={{ width: 500 }}
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Search"
                />
              </form>

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
                  <ListClientes clientes={search} key={clientes.id} />
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
