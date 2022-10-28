import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import { checkRole } from "../api/auth.api";
import Pregunta from "../containers/Pregunta";
import { Link, useParams } from "react-router-dom";
import { getRespuestasByPreguntaIdRequest } from "../api/respuestas.api";
import { getPreguntaByIdRequest } from "../api/pregunta.api";

function DiagnosticadorGeneral() {
  const [pregunta, setPregunta] = useState({});
  const [respuestas, setRespuestas] = useState([]);
  const [isSoporte, setIsSoporte] = useState(false);
  // const [containsQueryParams, setContainsQueryParams] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const params = useParams();

  const check = async (claim) => {
    const res = await checkRole(claim.sub, "Soporte");
    setIsSoporte(res.data.containsRole);
  };

  const getPregunta = async (id) => {
    const res = await getPreguntaByIdRequest(id);

    setPregunta(res.data);
  };

  const getRespuestas = async (id) => {
    const res = await getRespuestasByPreguntaIdRequest(id);

    setRespuestas(res.data);
  };

  useEffect(() => {
    getPregunta(params.id);
    getRespuestas(params.id);

    if (isAuthenticated) {
      check(user);
    }

    // if (params && params.id) {
    //   setContainsQueryParams(true);
    // }
  }, [isAuthenticated, params, user]);

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
              {isSoporte ? (
                <Link
                  to={`/diagnosticador/new/${pregunta._id}`}
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#514ef3" }}
                >
                  Agregar nueva respuesta +
                </Link>
              ) : (
                <></>
              )}
            </div>
          </nav>
        </div>
        <div
          className="table-responsive mx-3"
          style={{ background: "#eff3f7" }}
        >
          {/* {containsQueryParams ? <DiagnosticoSelector /> : <></>} */}
        </div>
        <Pregunta
          pregunta={pregunta}
          respuestas={respuestas}
          key={pregunta._id}
        />
      </div>
    </div>
  );
}

export default DiagnosticadorGeneral;
