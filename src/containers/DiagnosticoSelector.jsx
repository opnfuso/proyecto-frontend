import React from "react";
import PropTypes from "prop-types";

function DiagnosticoSelector(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Modelo</th>
          <th>Marca</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Saul Alexis</td>
          <td>Iphone 12</td>
          <td>Apple</td>
        </tr>
        <tr />
      </tbody>
    </table>
  );
}

DiagnosticoSelector.propTypes = {};

export default DiagnosticoSelector;
