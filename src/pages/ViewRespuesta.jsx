import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../containers/Navbar";
import { getSolucionesByPreguntaIdRequest } from "../api/solucion.api";
import { getRespuestaByIdRequest } from "../api/respuestas.api";
import ListSoluciones from "../containers/ListSoluciones";
import { useAuth0 } from "@auth0/auth0-react";
import { checkRole } from "../api/auth.api";
import DiagnosticoSelector from "../containers/DiagnosticoSelector";

function ViewRespuesta() {
  const params = useParams();
  const [soluciones, setSoluciones] = useState([]);
  const [respuesta, setRespuesta] = useState({});
  const [isSoporte, setIsSoporte] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const [searchParams] = useSearchParams();
  const dispositivoParam = searchParams.get("dispositivo");
  const bitacoraParams = searchParams.get("bitacora");

  const check = async (claim) => {
    const res = await checkRole(claim.sub, "Soporte");
    setIsSoporte(res.data.containsRole);
  };

  const getSoluciones = async (id) => {
    const res = await getSolucionesByPreguntaIdRequest(id);

    setSoluciones(res.data);
  };

  const getRespuesta = async (id) => {
    const res = await getRespuestaByIdRequest(id);

    setRespuesta(res.data);
  };

  useEffect(() => {
    getSoluciones(params.id);
    getRespuesta(params.id);

    if (isAuthenticated) {
      check(user);
    }
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
                  to={`/new/solucion/${respuesta._id}`}
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#514ef3" }}
                >
                  Agregar nueva solucion +
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
          {dispositivoParam ||
            (bitacoraParams && (
              <DiagnosticoSelector
                dispositivo={dispositivoParam}
                bitacora={bitacoraParams}
              />
            ))}
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
            {respuesta.text}
          </label>
          <ListSoluciones key={respuesta._id} soluciones={soluciones} />
        </div>
      </div>
    </div>
  );
}

export default ViewRespuesta;
