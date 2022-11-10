import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ItemCliente(props) {
  return (
    <tr>
      <td>{props.nombres}</td>
      <td>{props.apellidos}</td>
      <td>{props.fechaNacimiento}</td>
      <td>{props.telefono}</td>
      <td>{props.email}</td>
      <td>{props.domicilio}</td>
      <td>{props.activo ? "Activo" : "Inactivo"}</td>
      <td>
        <Link to={`${props.id}`}>
          <i className="fas fa-edit" />
        </Link>
      </td>
    </tr>
  );
}

ItemCliente.propTypes = {
  id: PropTypes.string,
  nombres: PropTypes.string,
  apellidos: PropTypes.string,
  telefono: PropTypes.string,
  fechaNacimiento: PropTypes.string,
  domicilio: PropTypes.string,
  activo: PropTypes.bool,
  email: PropTypes.string,
};

export default ItemCliente;
