import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../containers/Navbar";
import { getClientesRequest } from "../api/cliente.api";
import Select from "react-select";

function Diagnosticador() {
  const [diagnosticoPasado, setDiagnosticoPasado] = useState("");
  const [clientes, setClientes] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [dispositivo, setDispositivo] = useState("");
  const [searchParams] = useSearchParams();
  const bitacoraParam = searchParams.get("bitacora");

  const getClientes = async () => {
    const res = await getClientesRequest();

    let opt = [];

    res.data.forEach((c) => {
      const option = {
        value: c.id,
        label: c.nombres + " " + c.apellidos,
      };

      opt.push(option);
    });

    setOptions1(opt);
    setClientes(res.data);
  };

  const getOptions2 = (op) => {
    const cliente = clientes.find((e) => e.id === op.value);

    let opt = [];
    cliente.Dispositivo.forEach((dis) => {
      const option = {
        value: dis.imei,
        label: `${dis.marca} - ${dis.modelo}`,
      };

      opt.push(option);
    });

    setOptions2(opt);
  };

  useEffect(() => {
    setDiagnosticoPasado(localStorage.getItem("arbol"));
    getClientes();
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
                  Diagnosticador
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div>
          {bitacoraParam ? (
            <></>
          ) : (
            <table className="table">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Modelo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Select
                      options={options1}
                      onChange={(val) => {
                        getOptions2(val);
                      }}
                    />
                  </td>
                  <td>
                    <Select
                      options={options2}
                      onChange={(val) => {
                        setDispositivo(val.value);
                      }}
                    />
                  </td>
                </tr>
                <tr />
              </tbody>
            </table>
          )}
        </div>
        <div
          className="container d-flex flex-column align-items-center justify-content-center"
          id="container-buttons"
          style={{ width: 369, margin: "auto" }}
        >
          <div className="row">
            <div className="col-md-12">
              {diagnosticoPasado &&
              diagnosticoPasado !== "633b146d4db46330d41ad1c0" ? (
                <Link
                  to={
                    dispositivo.length > 0
                      ? `${diagnosticoPasado}?dispositivo=${dispositivo}`
                      : bitacoraParam
                      ? `${diagnosticoPasado}?bitacora=${bitacoraParam}`
                      : diagnosticoPasado
                  }
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  style={{ marginBottom: 30 }}
                >
                  Continuar diagnostico
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {bitacoraParam ? (
                <Link
                  to={`633b146d4db46330d41ad1c0?bitacora=${bitacoraParam}`}
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  style={{ marginBottom: 30 }}
                >
                  Iniciar diagnostico
                </Link>
              ) : (
                <Link
                  to={
                    dispositivo.length > 0
                      ? `633b146d4db46330d41ad1c0?dispositivo=${dispositivo}`
                      : "633b146d4db46330d41ad1c0"
                  }
                  className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
                  style={{ marginBottom: 30 }}
                >
                  Iniciar diagnostico
                </Link>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Link
                to={
                  dispositivo.length > 0
                    ? `/diagnosticador-rapido?dispositivo=${dispositivo}`
                    : bitacoraParam
                    ? `/diagnosticador-rapido?bitacora=${bitacoraParam}`
                    : "/diagnosticador-rapido"
                }
                className="btn btn-primary d-flex align-items-center justify-content-center btn-vistas"
              >
                Llenado rapido
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diagnosticador;
