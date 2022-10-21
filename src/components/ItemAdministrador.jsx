import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ItemAdministrador(props) {
  return (
    <tr>
      <td>{props.nombres}</td>
      <td>{props.apellidos}</td>
      <td>{props.fechaNacimiento}</td>
      <td>{props.telefono}</td>
      <td>
        <Link to={`${props.id}`} href="#">
          <i className="fas fa-edit" />
        </Link>
      </td>
    </tr>
  );
}

ItemAdministrador.propTypes = {
  nombres: PropTypes.string,
  apellidos: PropTypes.string,
  telefono: PropTypes.string,
  fechaNacimiento: PropTypes.string,
  id: PropTypes.number,
};

export default ItemAdministrador;
