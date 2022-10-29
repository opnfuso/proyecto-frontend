import React from "react";
import PropTypes from "prop-types";

function ItemBitacora({ bitacora }) {
  return (
    <tr>
      <td>{bitacora.terminado ? "Si" : "No"}</td>
      <td>{bitacora.dispositivo.fecha_recibido.split("T")[0]}</td>
      <td>
        <a href="bitacora.html">
          <i className="fas fa-edit" />
        </a>
      </td>
    </tr>
  );
}

ItemBitacora.propTypes = {
  bitacora: PropTypes.object,
};

export default ItemBitacora;
