import React from "react";
import PropTypes from "prop-types";

function ListReparaciones({ reparaciones }) {
  return (
    <div className="d-flex flex-column">
      {reparaciones.map((reparacion) => {
        return (
          <a key={reparacion.id} className="my-1" href="#">
            {reparacion.titulo}
          </a>
        );
      })}
    </div>
  );
}

ListReparaciones.propTypes = {
  reparaciones: PropTypes.arrayOf(PropTypes.object),
};

export default ListReparaciones;
