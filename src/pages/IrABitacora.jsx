import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../containers/Navbar";
import { getBitacorasByDispositivoId } from "../api/bitacora.api";
import Select from "react-select";
import { getClientesRequest } from "../api/cliente.api";

function IrABitacora() {
  const [searchParams] = useSearchParams();
  const dispositivo = searchParams.get("dispositivo");
  const reparacion = searchParams.get("reparacion");
  const [options, setOptions] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [options3, setOptions3] = useState([]);
  const [bitacora, setBitacora] = useState({
    id: "",
    dispositivo: { id: "", id_cliente: "" },
  });

  const getOptions = async (id) => {
    const res = await getBitacorasByDispositivoId(id);

    let opt = [];

    res.data.forEach((bitacora) => {
      const option = {
        value: bitacora,
        label: `Fecha de salida: ${
          bitacora.fecha_salida.split("T")[0]
        } Terminado: ${bitacora.terminado ? "Si" : "No"}`,
      };

      opt.push(option);
    });

    setOptions(opt);
  };

  const getClientes = async () => {
    const res = await getClientesRequest();

    let opt = [];

    res.data.forEach((cliente) => {
      const option = {
        value: cliente,
        label: cliente.nombres,
      };

      opt.push(option);
    });

    setOptions(opt);
  };

  const getDispositivos = (val) => {
    let opt = [];

    val.value.Dispositivo.forEach((dis) => {
      const option = {
        value: dis,
        label: `${dis.modelo} - ${dis.marca}`,
      };

      opt.push(option);
    });

    setOptions2(opt);
  };

  const getBitacoras = async ({ value }) => {
    const res = await getBitacorasByDispositivoId(value.imei);
    let opt = [];

    res.data.forEach((bit) => {
      const option = {
        value: bit,
        label: `fecha de salida: ${bit.fecha_salida.split("T")[0]} ${
          bit.terminado ? "Si" : "No"
        }`,
      };

      opt.push(option);
    });

    setOptions3(opt);
  };

  useEffect(() => {
    if (dispositivo) {
      getOptions(dispositivo);
    } else {
      getClientes();
    }
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
                  Ir a bitacora
                </span>
              </div>
            </div>
          </nav>
        </div>
        <form className="mx-3 my-4 d-flex flex-column w-50">
          {dispositivo ? (
            <label className="form-label">
              Selecciona bitacora
              <Select
                options={options}
                onChange={(val) => {
                  setBitacora(val.value);
                }}
              />
            </label>
          ) : (
            <>
              <label className="form-label">
                Selecciona cliente
                <Select
                  options={options}
                  onChange={(val) => {
                    getDispositivos(val);
                  }}
                />
              </label>
              <label className="form-label">
                Selecciona dispositivo
                <Select
                  options={options2}
                  onChange={(val) => {
                    getBitacoras(val);
                  }}
                />
              </label>
              <label className="form-label">
                Selecciona bitacora
                <Select
                  options={options3}
                  onChange={({ value }) => {
                    setBitacora(value);
                  }}
                />
              </label>
            </>
          )}
        </form>

        <Link
          to={`/clientes/${bitacora.dispositivo.id_cliente}/dispositivos/${bitacora.dispositivo.imei}/bitacoras/${bitacora.id}?reparacion=${reparacion}`}
          className="btn btn-primary align-self-center btn-detalles"
          type="button"
        >
          Ir
        </Link>
      </div>
    </div>
  );
}

export default IrABitacora;
