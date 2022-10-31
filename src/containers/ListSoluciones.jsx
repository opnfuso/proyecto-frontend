import React from "react";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

function ListSoluciones({ soluciones }) {
  const [searchParams] = useSearchParams();
  const dispositivo = searchParams.get("dispositivo");
  const bitacoraParam = searchParams.get("bitacora");

  return (
    <div className="d-flex w-100 my-4 justify-content-evenly flex-wrap">
      {soluciones ? (
        soluciones.map((respuesta) => {
          if (dispositivo) {
            return (
              <Link
                to={`/solucion/${respuesta._id}?dispositivo=${dispositivo}`}
                className="btn btn-primary btn-diag"
                type="button"
              >
                {respuesta.text}
              </Link>
            );
          } else if (bitacoraParam) {
            return (
              <Link
                to={`/solucion/${respuesta._id}?bitacora=${bitacoraParam}`}
                className="btn btn-primary btn-diag"
                type="button"
              >
                {respuesta.text}
              </Link>
            );
          } else {
            return (
              <Link
                to={`/solucion/${respuesta._id}`}
                className="btn btn-primary btn-diag"
                type="button"
              >
                {respuesta.text}
              </Link>
            );
          }
        })
      ) : (
        <></>
      )}
      <button className="btn btn-primary btn-diag" type="button">
        No hubo solucion
      </button>
    </div>
  );
}

ListSoluciones.propTypes = {
  soluciones: PropTypes.arrayOf(PropTypes.object),
};

export default ListSoluciones;
