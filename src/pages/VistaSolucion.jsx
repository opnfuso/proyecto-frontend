import React, { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Navbar from "../containers/Navbar.jsx";
import { getSolucionRequest } from "../api/solucion.api";
import { getManualReparacionesReparacionesByTitleRequest } from "../api/manual.api";
import { useEffect } from "react";
import { getBitacoraRequest } from "../api/bitacora.api";
import { getDispositivoRequest } from "../api/dispositivo.api.js";

function VistaSolucion() {
  const [solucion, setSolucion] = useState({ text: "" });
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [bitacora, setBitacora] = useState({
    id: "",
    dispositivo: { id: "", id_cliente: "" },
  });
  const [dispositivo, setDispositivo] = useState({});
  const dispositivoParam = searchParams.get("dispositivo");
  const bitacoraParam = searchParams.get("bitacora");
  const navigate = useNavigate();

  const getSolucion = async (id) => {
    const res = await getSolucionRequest(id);

    setSolucion(res.data);
  };

  const getReparacion = async () => {
    if (bitacoraParam) {
      const title = `${solucion.text.split("recomienda")[1].trim()} ${
        bitacora.dispositivo.modelo
      }`;

      const res = await getManualReparacionesReparacionesByTitleRequest(title);

      console.log(title);

      navigate(
        `/clientes/${bitacora.dispositivo.id_cliente}/dispositivos/${bitacora.dispositivo.imei}/bitacoras/${bitacora.id}?reparacion=${res.data[0].id}`
      );
    } else if (dispositivoParam) {
      const title = `${solucion.text.split("recomienda")[1].trim()} ${
        dispositivo.modelo
      }`;

      const res = await getManualReparacionesReparacionesByTitleRequest(title);

      console.log(title);

      navigate(
        `/ir-a-bitacora?dispositivo=${dispositivoParam}&reparacion=${res.data[0].id}`
      );
    }
  };

  const getBitacora = async (id) => {
    const res = await getBitacoraRequest(id);

    setBitacora(res.data);
  };

  const getDispositivo = async (id) => {
    const res = await getDispositivoRequest(id);

    setDispositivo(res.data);
  };

  useEffect(() => {
    if (bitacoraParam) {
      getBitacora(bitacoraParam);
    } else if (dispositivoParam) {
      getDispositivo(dispositivoParam);
    }
    getSolucion(params.id);
  }, []);

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Diagnosticador
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="table-responsive mx-3"
          style={{ background: "#eff3f7" }}
        ></div>
        <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
          <label
            className="form-label"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            {solucion.text}
          </label>
          <div className="d-flex w-100 my-4 justify-content-evenly flex-wrap">
            <button
              onClick={() => {
                getReparacion();
              }}
              className="btn btn-primary btn-diag"
              type="button"
            >
              Si funcionó
            </button>
            <Link
              to={
                dispositivoParam
                  ? `/respuesta/${solucion.respuesta}?dispositivo=${dispositivoParam}`
                  : bitacoraParam
                  ? `/respuesta/${solucion.respuesta}?bitacora=${bitacoraParam}`
                  : `/respuesta/${solucion.respuesta}`
              }
              className="btn btn-primary btn-diag"
              type="button"
            >
              No funcionó
            </Link>
          </div>
          {dispositivoParam ? (
            <Link
              to={`/manual?titulo=${
                solucion.text.split("recomienda")[1]
              }&dispositivo=${dispositivoParam}`}
              className="btn btn-primary btn-diag"
              type="button"
            >
              Ir al manual
            </Link>
          ) : bitacoraParam ? (
            <Link
              to={`/manual?titulo=${
                solucion.text.split("recomienda")[1]
              }&bitacora=${bitacoraParam}`}
              className="btn btn-primary btn-diag"
              type="button"
            >
              Ir al manual
            </Link>
          ) : (
            <Link
              to={`/manual?titulo=${solucion.text.split("recomienda")[1]}`}
              className="btn btn-primary btn-diag"
              type="button"
            >
              Ir al manual
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default VistaSolucion;
