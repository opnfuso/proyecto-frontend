import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { getDispositivoRequest } from "../api/dispositivo.api";

function DiagnosticoSelector(props) {
  const [dispositivo, setDispositivo] = useState({
    cliente: { nombre: "" },
    modelo: "",
    marca: "",
  });

  // Cambio
  const getDispositivo = async (id) => {
    const res = await getDispositivoRequest(id);

    setDispositivo(res.data);
  };

  useEffect(() => {
    if (props.dispositivo) {
      getDispositivo(props.dispositivo);
    }
  }, []);

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
          <td>{dispositivo.cliente.nombres}</td>
          <td>{dispositivo.modelo}</td>
          <td>{dispositivo.marca}</td>
        </tr>
        <tr />
      </tbody>
    </table>
  );
}

DiagnosticoSelector.propTypes = {
  dispositivo: PropTypes.object,
};

export default DiagnosticoSelector;
