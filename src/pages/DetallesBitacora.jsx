import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../containers/Navbar.jsx";
import { getBitacoraRequest, updateBitacoraRequest } from "../api/bitacora.api";
import { getClienteRequest } from "../api/cliente.api";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Field, Formik } from "formik";
import Swal from "sweetalert2";
import Select from "react-select";
import {
  getManualesReparacionesRequest,
  getManualReparacionRequest,
} from "../api/manual.api";
import { getTecnicosRequest } from "../api/tecnico.api";
import { createReparacionBitacoraRequest } from "../api/reparacionBitacora.api";
import { createTecnicoBitacoraRequest } from "../api/tecnicoBitacora.api";
import { usePrompt } from "../components/usePrompt.js";

function DetallesBitacora() {
  const [bitacora, setBitacora] = useState({ fecha_salida: "" });
  const [dispositivo, setDispositivo] = useState({
    marca: "",
    modelo: "",
    imei: 0,
    fecha_recibido: "",
  });
  const [cliente, setCliente] = useState({});
  const [reparado, setReparado] = useState(false);
  const [options1, setOptions1] = useState([]);
  const [options2, setOptions2] = useState([]);
  const [inputList1, setInputList1] = useState([]);
  const [inputValuesList1, setInputValuesList1] = useState([]);
  const [inputList2, setInputList2] = useState([]);
  const [defaultinputList1, setDefaultInputList1] = useState([]);
  const [defaultinputList2, setDefaultInputList2] = useState([]);
  const [inputValuesList2, setInputValuesList2] = useState([]);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const reparacion = searchParams.get("reparacion");
  const [termino, setTermino] = useState(false);
  usePrompt("Seguro que quieres salir?", true);

  const getBitacora = async (id) => {
    const res = await getBitacoraRequest(id);

    if (
      res.data.ReparacionesBitacoras &&
      res.data.ReparacionesBitacoras.length > 0
    ) {
      addSelectReparaciones(res.data.ReparacionesBitacoras);
    }

    if (res.data.TecnicosBitacoras && res.data.TecnicosBitacoras.length > 0) {
      addSelectTecnicos(res.data.TecnicosBitacoras);
    }

    setBitacora(res.data);
    setDispositivo(res.data.dispositivo);
  };

  const getCliente = async (id) => {
    const res = await getClienteRequest(id);

    setCliente(res.data);
  };

  const getReparaciones = async () => {
    const res = await getManualesReparacionesRequest();

    let options = [];

    res.data.forEach((tecnico) => {
      options.push({
        value: tecnico.id,
        label: tecnico.titulo,
      });
    });

    setOptions1(options);

    // setReparaciones(res.data);
  };

  const getTecnicos = async () => {
    const res = await getTecnicosRequest();

    let options = [];

    res.data.forEach((tecnico) => {
      options.push({
        value: tecnico.id,
        label: tecnico.nombres + " " + tecnico.apellidos,
      });
    });

    setOptions2(options);

    // setTecnicos(res.data);
  };

  const addSelectReparaciones = (reparaciones) => {
    let inputList = [];
    reparaciones.forEach((reparacion) => {
      const op = {
        value: reparacion.manualReparacionesId,
        label: reparacion.reparacion.titulo,
      };

      inputList.push(<Select value={op} className="mt-2" isDisabled={true} />);

      setDefaultInputList1(inputList);
    });
  };

  const addSelectTecnicos = (reparaciones) => {
    reparaciones.forEach((reparacion) => {
      const op = {
        value: reparacion.tecnicoId,
        label: reparacion.tecnico.nombres + " " + reparacion.tecnico.apellidos,
      };
      setDefaultInputList2(
        defaultinputList2.concat(
          <Select value={op} className="mt-2" isDisabled={true} />
        )
      );
    });
  };

  const handleClick1 = () => {
    setInputList1(
      inputList1.concat(
        <Select
          className="mt-2"
          options={options1}
          onChange={(val) => {
            setInputValuesList1(inputValuesList1.concat(val));
          }}
        />
      )
    );
  };

  const handleClick2 = () => {
    setInputList2(
      inputList2.concat(
        <Select
          className="mt-2"
          options={options2}
          onChange={(val) => {
            setInputValuesList2(inputValuesList2.concat(val));
          }}
        />
      )
    );
  };

  const createReparacionesBitacoras = async () => {
    try {
      console.log(inputValuesList1);
      inputValuesList1.forEach(async (value) => {
        const create = {
          manualReparacionesId: +value.value,
          bitacoraId: +params.id3,
        };

        await createReparacionBitacoraRequest(create);
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Hubo un error",
        icon: "error",
      });
    }
  };

  const createTecnicosBitacoras = async () => {
    try {
      inputValuesList2.forEach(async (value) => {
        const create = {
          tecnicoId: +value.value,
          bitacoraId: +params.id3,
        };

        await createTecnicoBitacoraRequest(create);
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Hubo un error",
        icon: "error",
      });
    }
  };

  const getReparacion = async (id) => {
    const res = await getManualReparacionRequest(id);

    const opt = {
      value: res.data.id,
      label: res.data.titulo,
    };

    setInputList1(
      inputList1.concat(<Select className="mt-2" defaultValue={opt} />)
    );

    setInputValuesList1(inputValuesList1.concat(opt));
  };

  useEffect(() => {
    if (reparacion) {
      getReparacion(reparacion);
    }
    getCliente(params.id);
    getBitacora(params.id3);
    getTecnicos();
    getReparaciones();
  }, []);

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9, 44, 77)", fontWeight: "bold" }}>
                  Bitacora de dispositivo
                </span>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col">
                <Formik
                  enableReinitialize={true}
                  initialValues={{
                    terminado: bitacora.terminado,
                    reparado: bitacora.reparado,
                    fecha_salida: bitacora.fecha_salida.split("T")[0],
                    notas: bitacora.notas,
                    costo: bitacora.costo,
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const handleSubmit = async () => {
                      Swal.fire({
                        title: "Editar la bitacora",
                        icon: "question",
                        showDenyButton: true,
                        confirmButtonText: "Editar",
                        denyButtonText: "Cancelar",
                      }).then(async (result) => {
                        try {
                          if (result.isConfirmed) {
                            await createReparacionesBitacoras();
                            await createTecnicosBitacoras();
                            const response = await updateBitacoraRequest(
                              params.id3,
                              values
                            );

                            if (response.status === 200) {
                              Swal.fire({
                                title: "Bitacora editada con exito",
                                icon: "success",
                              });
                            }
                          }
                        } catch (error) {
                          console.error(error);
                          Swal.fire({
                            title: "Hubo un error",
                            icon: "error",
                          });
                        }
                      });
                    };

                    handleSubmit();
                    setSubmitting(false);
                  }}
                >
                  {({ isSubmitting, handleSubmit }) => (
                    <form onSubmit={handleSubmit} id="form-bitacora">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Cliente</th>
                                  <th>Modelo</th>
                                  <th>Marca</th>
                                  <th>IMEI</th>
                                  <th>Bitacora</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    {cliente.nombres + " " + cliente.apellidos}
                                  </td>
                                  <td>{dispositivo.modelo}</td>
                                  <td>{dispositivo.marca}</td>
                                  <td>{dispositivo.imei}</td>
                                  <td>{params.id3}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Progreso</th>
                                  <th>Fecha de Entrada</th>
                                  {termino && <th>Fecha de entregado</th>}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div>
                                      <Field
                                        onClick={(val) => {
                                          setTermino(
                                            val.target.value === "false"
                                          );
                                        }}
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        id="flexCheckDefault"
                                        name="terminado"
                                      />
                                      <label
                                        className="form-check-label ms-2"
                                        htmlFor="flexCheckDefault"
                                      >
                                        Entregado
                                      </label>
                                      <label
                                        className="form-check-label"
                                        htmlFor="flexCheckDefault"
                                      >
                                        <Field
                                          onClick={(val) => {
                                            setReparado(
                                              val.target.value === "false"
                                            );
                                          }}
                                          className="form-check-input ms-2 me-2"
                                          type="checkbox"
                                          defaultValue
                                          id="flexCheckDefault"
                                          name="reparado"
                                        />
                                        Reparado
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    {dispositivo.fecha_recibido.split("T")[0]}
                                  </td>
                                  {termino && (
                                    <td>
                                      <Field
                                        className="form-control"
                                        type="date"
                                        name="fecha_salida"
                                        required
                                      />
                                    </td>
                                  )}
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {reparado ? (
                            <Field
                              className="form-control"
                              name="notas"
                              placeholder="notas de bitacora:"
                              required
                              rows={4}
                              defaultValue={""}
                              as="textarea"
                            />
                          ) : (
                            <Field
                              className="form-control"
                              name="notas"
                              placeholder="notas de bitacora:"
                              rows={4}
                              defaultValue={""}
                              as="textarea"
                              required
                            />
                          )}
                          <label className="form-label my-4">
                            Costo total
                            <Field
                              className="form-control"
                              type="number"
                              name="costo"
                              placeholder={300}
                              required
                            />
                          </label>
                        </div>
                        <div
                          className="col-md-4 d-flex flex-column"
                          style={{ background: "#eef6fb" }}
                        >
                          <div
                            className="m-4 p-3 d-flex flex-column"
                            style={{ background: "#ffffff", borderRadius: 12 }}
                          >
                            <label
                              className="form-label"
                              style={{ marginBottom: 30, fontWeight: "bold" }}
                            >
                              Reparacion
                            </label>
                            <label className="form-label w-100">
                              Reparación utilizada
                              {defaultinputList1}
                              {inputList1}
                              <div></div>
                            </label>
                            <button
                              onClick={handleClick1}
                              className="btn btn-primary d-block"
                              type="button"
                              style={{
                                margin: "10px auto",
                                background: "#7e92a2",
                                borderRadius: 129,
                                border: "none",
                              }}
                            >
                              <i className="fas fa-plus" />
                            </button>

                            <label
                              className="form-label w-100"
                              style={{ marginTop: 30 }}
                            >
                              Selecciona tecnico/s involucrado
                              {defaultinputList2}
                              {inputList2}
                              <button
                                onClick={handleClick2}
                                className="btn btn-primary d-block"
                                type="button"
                                style={{
                                  margin: "10px auto",
                                  background: "#7e92a2",
                                  borderRadius: 129,
                                  border: "none",
                                }}
                              >
                                <i className="fas fa-plus" />
                              </button>
                            </label>
                            <button
                              className="btn btn-primary d-block"
                              type="submit"
                              disabled={isSubmitting}
                              style={{
                                margin: "10px auto",
                                background: "#092c4b",
                                border: "none",
                                borderRadius: 10,
                              }}
                            >
                              Guardar
                            </button>
                            <button
                              onClick={() => {
                                window.print();
                              }}
                              className="btn btn-primary d-block"
                              type="button"
                              style={{
                                margin: "10px auto",
                                background: "#7e92a2",
                                border: "none",
                                borderRadius: 10,
                              }}
                            >
                              Imprimir
                            </button>
                          </div>
                          <Link
                            to={`/diagnosticador?bitacora=${params.id3}`}
                            className="btn btn-primary btn-detalles"
                            style={{
                              background: "#514ef3",
                              color: "rgb(255, 255, 255)",
                              margin: "30px auto",
                              width: "auto",
                            }}
                          >
                            Ir a diagnosticador
                          </Link>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesBitacora;
