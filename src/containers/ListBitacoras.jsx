import React from "react";
import PropTypes from "prop-types";
import ItemBitacora from "../components/ItemBitacora";

function ListBitacoras({ bitacoras }) {
  return (
    <table className="table my-0" id="dataTable">
      <thead>
        <tr>
          <th>Id</th>
          <th>Fecha de entrada</th>
          <th>Entregado</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {bitacoras.map((bitacora) => {
          return <ItemBitacora key={bitacora.id} bitacora={bitacora} />;
        })}
      </tbody>
      <tfoot>
        <tr />
      </tfoot>
    </table>
  );
}

ListBitacoras.propTypes = {
  bitacoras: PropTypes.arrayOf(PropTypes.object),
};

export default ListBitacoras;
