import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ListSoluciones({ soluciones }) {
  return (
    <div className="d-flex w-100 my-4 justify-content-evenly flex-wrap">
      {soluciones ? (
        soluciones.map((respuesta) => {
          return (
            <Link
              to={`/solucion/${respuesta._id}`}
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
