import React from "react";
import PropTypes from "prop-types";
import ItemTecnico from "../components/ItemTecnico";

function ListTecnicos({ tecnicos }) {
  return (
    <table className="table my-0" id="dataTable">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Telefono</th>
          <th>Fecha de nacimiento</th>
          <th>Activo</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {tecnicos.map((tecnico) => (
          <ItemTecnico
            key={tecnico.id}
            nombres={tecnico.nombres}
            apellidos={tecnico.apellidos}
            telefono={tecnico.telefono}
            fechaNacimiento={tecnico.fecha_nacimiento_string}
            activo={tecnico.activo}
          />
        ))}
      </tbody>
      <tfoot>
        <tr />
      </tfoot>
    </table>
  );
}

ListTecnicos.propTypes = {
  tecnico: PropTypes.arrayOf(PropTypes.object),
};

export default ListTecnicos;
