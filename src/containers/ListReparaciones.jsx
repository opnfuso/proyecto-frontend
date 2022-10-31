import React from "react";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";

function ListReparaciones({ reparaciones }) {
  const [searchParams] = useSearchParams();
  const dispositivo = searchParams.get("dispositivo");
  const bitacoraParam = searchParams.get("bitacora");

  return (
    <div className="d-flex flex-column">
      {reparaciones.map((reparacion) => {
        if (dispositivo) {
          return (
            <Link
              to={`${reparacion.id}?dispositivo=${dispositivo}`}
              key={reparacion.id}
              className="my-1"
              href="#"
            >
              {reparacion.titulo}
            </Link>
          );
        } else if (bitacoraParam) {
          return (
            <Link
              to={`${reparacion.id}?bitacora=${bitacoraParam}`}
              key={reparacion.id}
              className="my-1"
              href="#"
            >
              {reparacion.titulo}
            </Link>
          );
        } else {
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
        }
      })}
    </div>
  );
}

ListReparaciones.propTypes = {
  reparaciones: PropTypes.arrayOf(PropTypes.object),
};

export default ListReparaciones;
