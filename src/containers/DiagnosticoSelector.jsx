import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { getDispositivoRequest } from "../api/dispositivo.api";
import { getBitacoraRequest } from "../api/bitacora.api";

function DiagnosticoSelector(props) {
  const [dispositivo, setDispositivo] = useState({
    cliente: { nombre: "" },
    modelo: "",
    marca: "",
  });

  const getBitacora = async (id) => {
    const res = await getBitacoraRequest(id);

    getDispositivo(res.data.imei_dispositivo);
  };

  const getDispositivo = async (id) => {
    const res = await getDispositivoRequest(id);

    setDispositivo(res.data);
  };

  useEffect(() => {
    console.log(props);
    if (props.dispositivo) {
      getDispositivo(props.dispositivo);
    } else if (props.bitacora) {
      getBitacora(props.bitacora);
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
  bitacora: PropTypes.string,
};

export default DiagnosticoSelector;
