import React from "react";
import PropTypes from "prop-types";

function ItemCliente(props) {
  return (
    <tr>
      <td>{props.nombres}</td>
      <td>{props.apellidos}</td>
      <td>{props.fechaNacimiento}</td>
      <td>{props.telefono}</td>
      <td>
        <a href="#">
          <i className="fas fa-edit" />
        </a>
      </td>
    </tr>
  );
}

ItemCliente.propTypes = {
  nombres: PropTypes.string,
  apellidos: PropTypes.string,
  telefono: PropTypes.string,
  fechaNacimiento: PropTypes.string,
};

export default ItemCliente;
