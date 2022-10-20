import React from "react";
import PropTypes from "prop-types";

function ItemTecnico(props) {
  return (
    <tr>
      <td>{props.nombres}</td>
      <td>{props.apellidos}</td>
      <td>{props.telefono}</td>
      <td>{props.fechaNacimiento}</td>
      <td>{props.activo ? "Activo" : "Inactivo"}</td>
      <td>
        <a href="#">
          <i className="fas fa-edit" />
        </a>
      </td>
    </tr>
  );
}

ItemTecnico.propTypes = {
  nombres: PropTypes.string,
  apellidos: PropTypes.string,
  telefono: PropTypes.string,
  fechaNacimiento: PropTypes.string,
  activo: PropTypes.bool,
};

export default ItemTecnico;
