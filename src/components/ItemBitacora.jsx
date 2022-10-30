import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ItemBitacora({ bitacora }) {
  return (
    <tr>
      <td>{bitacora.terminado ? "Si" : "No"}</td>
      <td>{bitacora.dispositivo.fecha_recibido.split("T")[0]}</td>
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
