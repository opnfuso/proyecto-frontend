import React, { useEffect, useState } from "react";
import ListPreguntas from "../containers/ListPreguntas.jsx";
import Navbar from "../containers/Navbar.jsx";
import { getRespuestasRequest } from "../api/respuestas.api";

function DiagnosticoRapido() {
  const [preguntas, setPreguntas] = useState([]);

  const getPreguntas = async () => {
    const res = await getRespuestasRequest();

    let preguntas = [];

    res.data.forEach((respuesta) => {
      if (
        !preguntas.filter((e) => e._id === respuesta.pregunta._id).length > 0
      ) {
        preguntas.push(respuesta.pregunta);
      }
    });

    res.data.forEach((respuesta) => {
      const index = preguntas.findIndex(
        (e) => respuesta.pregunta._id === e._id
      );

      if (preguntas.at(index)["respuestas"]) {
        preguntas.at(index)["respuestas"].push(respuesta);
      } else {
        preguntas.at(index)["respuestas"] = [];
        preguntas.at(index)["respuestas"].push(respuesta);
      }
    });

    setPreguntas(preguntas);
  };

  useEffect(() => {
    getPreguntas();
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
                  Diagnosticador rapido
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="table-responsive mx-3"
          style={{ background: "#eff3f7" }}
        >
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
                <td>Saul Alexis</td>
                <td>Iphone 12</td>
                <td>Apple</td>
              </tr>
              <tr />
            </tbody>
          </table>
        </div>
        <ListPreguntas preguntas={preguntas} />
      </div>
    </div>
  );
}

export default DiagnosticoRapido;
