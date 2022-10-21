import React from "react";
import PropTypes from "prop-types";
import ItemAdministrador from "../components/ItemAdministrador";

function ListAdministradores({ administradores }) {
  return (
    <table className="table my-0" id="dataTable">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Telefono</th>
          <th>Fecha de nacimiento</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {administradores.map((administrador) => (
          <ItemAdministrador
            key={administrador.id}
            id={administrador.id}
            nombres={administrador.nombres}
            apellidos={administrador.apellidos}
            telefono={administrador.telefono}
            fechaNacimiento={administrador.fecha_nacimiento_string}
          />
        ))}
      </tbody>
      <tfoot>
        <tr />
      </tfoot>
    </table>
  );
}

ListAdministradores.propTypes = {
  administradores: PropTypes.arrayOf(PropTypes.object),
};

export default ListAdministradores;
