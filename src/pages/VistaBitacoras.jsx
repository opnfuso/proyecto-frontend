import React, { useEffect, useState } from "react";
import ListBitacoras from "../containers/ListBitacoras.jsx";
import Navbar from "../containers/Navbar.jsx";
import { getBitacorasByDispositivoId } from "../api/bitacora.api";
import { Link, useParams } from "react-router-dom";

function VistaBitacoras() {
  const [bitacoras, setBitacoras] = useState([]);
  const [terminadas, setTerminadas] = useState(true);
  const params = useParams();

  const getBitacoras = async (id) => {
    const res = await getBitacorasByDispositivoId(id);

    res.data.forEach((bit) => {
      if (bit.terminado === false) {
        setTerminadas(false);
      }
    });

    setBitacoras(res.data);
  };

  useEffect(() => {
    getBitacoras(params.id2);
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
                  Bitacoras
                </span>
              </div>
              {terminadas ? (
                <Link
                  to="new"
                  className="btn btn-primary btn-agregar-usuario"
                  href="#"
                >
                  Agregar nuevo +
                </Link>
              ) : (
                <></>
              )}
            </div>
          </nav>
          <div className="container-fluid">
            <div className="card shadow">
              <div className="card-body">
                <div
                  className="table-responsive table mt-2"
                  id="dataTable-1"
                  role="grid"
                  aria-describedby="dataTable_info"
                >
                  <ListBitacoras key={params.id2} bitacoras={bitacoras} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaBitacoras;
