import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ListSoluciones({ soluciones }) {
  return (
    <div className="d-flex w-100 my-4 justify-content-evenly flex-wrap">
      {soluciones ? (
        soluciones.map((respuesta) => {
          return (
            <button className="btn btn-primary btn-diag" type="button">
              {respuesta.text}
            </button>
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
