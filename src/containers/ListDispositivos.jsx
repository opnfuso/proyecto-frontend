import React from "react";
import PropTypes from "prop-types";
import ItemDispositivo from "../components/ItemDispositivo";

function ListDispositivos({ dispositivos }) {
  return (
    <table className="table my-0" id="dataTable">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>IMEI</th>
          <th>No. de Serie</th>
          <th>Fecha Recibido</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {dispositivos.map((dispositivo) => (
          <ItemDispositivo
            key={dispositivo.imei}
            fecha_recibido={dispositivo.fecha_recibido_string}
            imei={dispositivo.imei}
            marca={dispositivo.marca}
            modelo={dispositivo.modelo}
            numero_serie={dispositivo.numero_serie}
          />
        ))}
      </tbody>
      <tfoot>
        <tr />
      </tfoot>
    </table>
  );
}

ListDispositivos.propTypes = {
  dispositivos: PropTypes.arrayOf(PropTypes.object),
};

export default ListDispositivos;
