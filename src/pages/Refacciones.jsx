import React, { useEffect, useRef, useState } from "react";
import Navbar from "../containers/Navbar";
import { getRefaccionesRequest } from "../api/refacciones.api";
import PropTypes from "prop-types";
import Select from "react-select";

function Refacciones({ query }) {
  const [refacciones, setRefacciones] = useState([]);
  const [pagina, setPagina] = useState("");
  const refQuery = useRef("");

  const options = [
    {
      value: "site:amazon.com.mx",
      label: "Amazon",
    },
    {
      value: "site:mercadolibre.com.mx",
      label: "Mercado Libre",
    },
    {
      value: "site:aliexpress.com",
      label: "Aliexpress",
    },
  ];

  const getRefaccionesRef = async () => {
    const res = await getRefaccionesRequest(
      `${refQuery.current.value} ${pagina}`
    );

    setRefacciones(res.data.data.organic_results);
  };

  const getRefaccionesProps = async () => {
    const res = await getRefaccionesRequest(query);

    setRefacciones(res.data.data.organic_results);
  };

  useEffect(() => {
    if (query) {
      getRefaccionesProps();
    }
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
                  Refacciones
                </span>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Buscador Refacción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          ref={refQuery}
                          type="text"
                          className="w-50"
                          placeholder="display iphone 12"
                          style={{ paddingRight: 31 }}
                        />
                        <i
                          className="fas fa-search position-relative"
                          style={{ left: "-30px", color: "#7e92a2" }}
                        />
                        <button
                          onClick={getRefaccionesRef}
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
              <Select
                options={options}
                isClearable={true}
                onChange={(value) => setPagina(value.value)}
                className="mb-2 col col-sm-2 "
              />
              <div id="refacciones" className="d-flex flex-column">
                {refacciones.map((refaccion, index) => {
                  return (
                    <a key={index} href={refaccion.url}>
                      {refaccion.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Refacciones.propTypes = {
  query: PropTypes.string,
};

export default Refacciones;
