import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Respuestas({ respuestas }) {
  return (
    <div className="d-flex w-100 my-4 justify-content-center flex-wrap">
      {respuestas ? (
        respuestas.map((respuesta) => {
          return (
            <Link
              to={`/diagnosticador/${respuesta.siguiente_pregunta}`}
              className="btn btn-primary btn-diag"
              type="button"
            >
              {respuesta.text}
            </Link>
          );
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
