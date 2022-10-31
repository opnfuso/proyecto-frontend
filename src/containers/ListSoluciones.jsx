import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";
import { getBitacoraRequest } from "../api/bitacora.api";
import DiagnosticoSelector from "./DiagnosticoSelector.jsx";

function ListSoluciones({ soluciones }) {
  const [searchParams] = useSearchParams();
  const dispositivoParam = searchParams.get("dispositivo");
  const bitacoraParam = searchParams.get("bitacora");
  const [bitacora, setBitacora] = useState({
    id: "",
    dispositivo: { id: "", id_cliente: "" },
  });

  const getBitacora = async (id) => {
    const res = await getBitacoraRequest(id);

    setBitacora(res.data);
  };

  useEffect(() => {
    if (bitacoraParam) {
      getBitacora(bitacoraParam);
    }
  }, []);

  return (
    <div className="d-flex w-100 my-4 justify-content-evenly flex-wrap">
      {soluciones ? (
        soluciones.map((respuesta) => {
          if (dispositivoParam) {
            return (
              <Link
                to={`/solucion/${respuesta._id}?dispositivo=${dispositivoParam}`}
                className="btn btn-primary btn-diag"
                type="button"
              >
                {respuesta.text}
              </Link>
            );
          } else if (bitacoraParam) {
            return (
              <Link
                to={`/solucion/${respuesta._id}?bitacora=${bitacoraParam}`}
                className="btn btn-primary btn-diag"
                type="button"
              >
                {respuesta.text}
              </Link>
            );
          } else {
            return (
              <Link
                to={`/solucion/${respuesta._id}`}
                className="btn btn-primary btn-diag"
                type="button"
              >
                {respuesta.text}
              </Link>
            );
          }
        })
      ) : (
        <></>
      )}
      <Link
        to={
          dispositivoParam
            ? `/ir-a-bitacora?dispositivo=${dispositivoParam}`
            : bitacoraParam
            ? `/clientes/${bitacora.dispositivo.id_cliente}/dispositivos/${bitacora.dispositivo.imei}/bitacoras/${bitacora.id}`
            : ""
        }
        className="btn btn-primary btn-diag"
        type="button"
      >
        No hubo solucion
      </Link>
    </div>
  );
}

ListSoluciones.propTypes = {
  soluciones: PropTypes.arrayOf(PropTypes.object),
};

export default ListSoluciones;
