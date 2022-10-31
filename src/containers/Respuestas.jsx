import React from "react";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

function Respuestas({ respuestas }) {
  const [searchParams] = useSearchParams();
  const dispositivo = searchParams.get("dispositivo");
  const bitacoraParam = searchParams.get("bitacora");

  return (
    <div className="d-flex w-100 my-4 justify-content-center flex-wrap">
      {respuestas ? (
        respuestas.map((respuesta) => {
          if (dispositivo) {
            if (respuesta.siguiente_pregunta) {
              return (
                <Link
                  to={`/diagnosticador/${respuesta.siguiente_pregunta}?dispositivo=${dispositivo}`}
                  className="btn btn-primary btn-diag"
                  type="button"
                >
                  {respuesta.text}
                </Link>
              );
            } else {
              return (
                <Link
                  to={`/respuesta/${respuesta._id}?dispositivo=${dispositivo}`}
                  className="btn btn-primary btn-diag"
                  type="button"
                >
                  {respuesta.text}
                </Link>
              );
            }
          } else if (bitacoraParam) {
            if (respuesta.siguiente_pregunta) {
              return (
                <Link
                  to={`/diagnosticador/${respuesta.siguiente_pregunta}?bitacora=${bitacoraParam}`}
                  className="btn btn-primary btn-diag"
                  type="button"
                >
                  {respuesta.text}
                </Link>
              );
            } else {
              return (
                <Link
                  to={`/respuesta/${respuesta._id}?bitacora=${bitacoraParam}`}
                  className="btn btn-primary btn-diag"
                  type="button"
                >
                  {respuesta.text}
                </Link>
              );
            }
          } else {
            if (respuesta.siguiente_pregunta) {
              return (
                <Link
                  to={`/diagnosticador/${respuesta.siguiente_pregunta}`}
                  className="btn btn-primary btn-diag"
                  type="button"
                >
                  {respuesta.text}
                </Link>
              );
            } else {
              return (
                <Link
                  to={`/respuesta/${respuesta._id}`}
                  className="btn btn-primary btn-diag"
                  type="button"
                >
                  {respuesta.text}
                </Link>
              );
            }
          }
        })
      ) : (
        <></>
      )}
    </div>
  );
}

Respuestas.propTypes = {
  respuestas: PropTypes.arrayOf(PropTypes.object),
};

export default Respuestas;
