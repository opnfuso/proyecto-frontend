import React from "react";
import PropTypes from "prop-types";
import ItemCliente from "../components/ItemCliente";

function ListClientes({ clientes }) {
  return (
    <table className="table my-0" id="dataTable">
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Fecha de nacimiento</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Domicilio</th>
          <th>Activo</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <ItemCliente
            key={cliente.id}
            id={cliente.id}
            nombres={cliente.nombres}
            apellidos={cliente.apellidos}
            fechaNacimiento={cliente.fecha_nacimiento_string}
            telefono={cliente.telefono}
            domicilio={cliente.domicilio}
            activo={cliente.activo}
            email={cliente.email}
          />
        ))}
      </tbody>
      <tfoot>
        <tr />
      </tfoot>
    </table>
  );
}

ListClientes.propTypes = {
  clientes: PropTypes.arrayOf(PropTypes.object),
};

export default ListClientes;
