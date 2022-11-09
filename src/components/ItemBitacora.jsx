import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ItemBitacora({ bitacora }) {
  return (
    <tr>
      <td>{bitacora.id}</td>
      <td>{bitacora.fecha_recibido_string}</td>
      <td>{bitacora.terminado ? "Si" : "No"}</td>
      <td>
        <Link to={`${bitacora.id}`}>
          <i className="fas fa-edit" />
        </Link>
      </td>
    </tr>
  );
}

ItemBitacora.propTypes = {
  bitacora: PropTypes.object,
};

export default ItemBitacora;
