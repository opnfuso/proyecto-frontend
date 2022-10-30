import React, { useEffect, useRef, useState } from "react";
import ListReparaciones from "../containers/ListReparaciones";
import Navbar from "../containers/Navbar";
import { getManualReparacionesReparacionesByTitleRequest } from "../api/manual.api";
import { Link, useSearchParams } from "react-router-dom";

function Manual() {
  const [manuales, setManuales] = useState([]);
  const refQuery = useRef("");
  const [searchParams] = useSearchParams();
  const titulo = searchParams.get("titulo");

  const getManuales = async () => {
    if (refQuery.current.value.length > 0) {
      const res = await getManualReparacionesReparacionesByTitleRequest(
        refQuery.current.value
      );

      setManuales(res.data);
    } else if (titulo) {
      const res = await getManualReparacionesReparacionesByTitleRequest(
        titulo.trim()
      );

      setManuales(res.data);
    }
  };

  useEffect(() => {
    getManuales();
  });

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Manual de reparaciones
                </span>
              </div>
              <Link
                to="/new/manual"
                className="btn btn-primary btn-agregar-usuario"
                href="#"
              >
                Ingresar reparacion +
              </Link>
            </div>
          </nav>
          <div className="container-fluid">
            <div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Buscador Local</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          ref={refQuery}
                          type="search"
                          className="w-50"
                          placeholder="Cambio de display apple iphone 12"
                          style={{ paddingRight: 31 }}
                        />
                        <i
                          className="fas fa-search position-relative"
                          style={{ left: "-30px", color: "#7e92a2" }}
                        />
                        <button
                          onClick={getManuales}
                          type="button"
                          className="btn btn-primary"
                        >
                          Buscar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ListReparaciones reparaciones={manuales} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manual;
