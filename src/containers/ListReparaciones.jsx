import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ListReparaciones({ reparaciones }) {
  return (
    <div className="d-flex flex-column">
      {reparaciones.map((reparacion) => {
        return (
          <Link
            to={`${reparacion.id}`}
            key={reparacion.id}
            className="my-1"
            href="#"
          >
            {reparacion.titulo}
          </Link>
        );
      })}
    </div>
  );
}

ListReparaciones.propTypes = {
  reparaciones: PropTypes.arrayOf(PropTypes.object),
};

export default ListReparaciones;
