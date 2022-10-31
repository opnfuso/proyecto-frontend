import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";
import { checkRole } from "../api/auth.api";
import { useEffect } from "react";

const SeleccionUsuarios = () => {
  const [isAdministrador, setIsAdministrador] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const check = async (claim) => {
    const res = await checkRole(claim.sub, "Administrador");
    setIsAdministrador(res.data.containsRole);
  };

  useEffect(() => {
    if (isAuthenticated) {
      check(user);
    }
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
              {isAdministrador && (
                <Link
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  to="/administradores"
                >
                  Administradores
                </Link>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {isAdministrador && (
                <Link
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  to="/tecnicos"
                >
                  Tecnicos
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeleccionUsuarios;
