import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import Navbar from "../containers/Navbar";
import { getManualReparacionRequest } from "../api/manual.api";
import { getBitacoraRequest } from "../api/bitacora.api";

function Reparacion() {
  const [reparacion, setReparacion] = useState({});
  const params = useParams();
  const [searchParams] = useSearchParams();
  const dispositivo = searchParams.get("dispositivo");
  const bitacoraParam = searchParams.get("bitacora");
  const [bitacora, setBitacora] = useState({
    id: "",
    dispositivo: { id: "", id_cliente: "" },
  });

  const getReparacion = async () => {
    const res = await getManualReparacionRequest(params.id);

    setReparacion(res.data);
  };

  const getBitacora = async (id) => {
    const res = await getBitacoraRequest(id);

    setBitacora(res.data);
  };

  useEffect(() => {
    if (bitacoraParam) {
      getBitacora(bitacoraParam);
    }
    getReparacion();
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
                  Reparacion
                </span>
              </div>
            </div>
          </nav>
          <div className="container-fluid d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label
                className="form-label"
                style={{
                  padding: 12,
                  borderStyle: "solid",
                  borderColor: "#7e92a2",
                  borderRadius: 8,
                  marginBottom: 20,
                }}
              >
                {reparacion.titulo}
              </label>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: reparacion.contenido }}
            ></div>
            {dispositivo && (
              <Link
                to={`/ir-a-bitacora?dispositivo=${dispositivo}&reparacion=${params.id}`}
                className="btn btn-primary btn-detalles align-self-center m-4 w-auto"
                href="#"
              >
                Llenar en bitacora
              </Link>
            )}
            {bitacoraParam && (
              <Link
                to={`/clientes/${bitacora.dispositivo.id_cliente}/dispositivos/${bitacora.dispositivo.imei}/bitacoras/${bitacora.id}?reparacion=${params.id}`}
                className="btn btn-primary btn-detalles align-self-center m-4 w-auto"
                href="#"
              >
                Llenar en bitacora
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reparacion;
