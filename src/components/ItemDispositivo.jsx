import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ItemDispositivo(props) {
  return (
    <tr>
      <td>{props.marca}</td>
      <td>{props.modelo}</td>
      <td>{props.imei}</td>
      <td>{props.numero_serie}</td>
      <td>{props.fecha_recibido}</td>
      <td>
        <Link to={`${props.imei}`}>
          <i className="fas fa-edit" />
        </Link>
      </td>
    </tr>
  );
}

ItemDispositivo.propTypes = {
  id: PropTypes.string,
  marca: PropTypes.string,
  modelo: PropTypes.string,
  imei: PropTypes.string,
  numero_serie: PropTypes.string,
  fecha_recibido: PropTypes.string,
};

export default ItemDispositivo;
