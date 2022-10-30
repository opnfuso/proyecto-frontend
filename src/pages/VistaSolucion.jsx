import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../containers/Navbar.jsx";
import { getSolucionRequest } from "../api/solucion.api";
import { useEffect } from "react";

function VistaSolucion() {
  const [solucion, setSolucion] = useState({});
  const params = useParams();

  const getSolucion = async (id) => {
    const res = await getSolucionRequest(id);

    setSolucion(res.data);
  };

  useEffect(() => {
    getSolucion(params.id);
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
                  Diagnosticador
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="table-responsive mx-3"
          style={{ background: "#eff3f7" }}
        >
          {/* <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Marca</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Saul Alexis</td>
                <td>Iphone 12</td>
                <td>Apple</td>
              </tr>
              <tr />
            </tbody>
          </table> */}
        </div>
        <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
          <label
            className="form-label"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            {solucion.text}
          </label>
          <div className="d-flex w-100 my-4 justify-content-evenly flex-wrap">
            <button className="btn btn-primary btn-diag" type="button">
              Si funcionó
            </button>
            <button className="btn btn-primary btn-diag" type="button">
              No funcionó
            </button>
          </div>
          <button className="btn btn-primary btn-diag" type="button">
            Ir al manual
          </button>
          {/* <ListSoluciones key={respuesta._id} soluciones={soluciones} /> */}
        </div>
      </div>
    </div>
  );
}

export default VistaSolucion;
