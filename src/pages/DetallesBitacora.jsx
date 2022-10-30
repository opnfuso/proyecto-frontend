import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../containers/Navbar.jsx";
import { getBitacoraRequest, updateBitacoraRequest } from "../api/bitacora.api";
import { getClienteRequest } from "../api/cliente.api";
import { useParams } from "react-router-dom";
import { Field, Formik } from "formik";
import Swal from "sweetalert2";

function DetallesBitacora() {
  const [bitacora, setBitacora] = useState({});
  const [dispositivo, setDispositivo] = useState({
    marca: "",
    modelo: "",
    imei: 0,
    fecha_recibido: "",
  });
  const [cliente, setCliente] = useState({});
  const [reparado, setReparado] = useState(false);
  const params = useParams();

  const getBitacora = async (id) => {
    const res = await getBitacoraRequest(id);

    setBitacora(res.data);
    setDispositivo(res.data.dispositivo);
  };

  const getCliente = async (id) => {
    const res = await getClienteRequest(id);

    setCliente(res.data);
  };

  useEffect(() => {
    getCliente(params.id);
    getBitacora(params.id3);
  });

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
                    fecha_salida: bitacora.fecha_salida,
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
                                  <th>Fecha de entregado</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div>
                                      <Field
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
                                        Terminado
                                      </label>
                                    </div>
                                  </td>
                                  <td>
                                    {dispositivo.fecha_recibido.split("T")[0]}
                                  </td>
                                  <td>
                                    <Field
                                      className="form-control"
                                      type="date"
                                      name="fecha_salida"
                                      required
                                    />
                                  </td>
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
                              <select className="form-select my-2" required>
                                <optgroup label="This is a group">
                                  <option value={12} selected>
                                    This is item 1
                                  </option>
                                  <option value={13}>This is item 2</option>
                                  <option value={14}>This is item 3</option>
                                </optgroup>
                              </select>
                              <div></div>
                            </label>
                            <button
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
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              <Field
                                onClick={(val) => {
                                  setReparado(val.target.value === "false");
                                }}
                                className="form-check-input me-2"
                                type="checkbox"
                                defaultValue
                                id="flexCheckDefault"
                                name="reparado"
                              />
                              Reparado
                            </label>

                            <label
                              className="form-label w-100"
                              style={{ marginTop: 30 }}
                            >
                              Selecciona tecnico/s involucrado
                              <select className="form-select my-2" required>
                                <optgroup label="This is a group">
                                  <option value={12} selected>
                                    This is item 1
                                  </option>
                                  <option value={13}>This is item 2</option>
                                  <option value={14}>This is item 3</option>
                                </optgroup>
                              </select>
                              <button
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
                          <a
                            className="btn btn-primary btn-detalles"
                            href="diagnosticador.html"
                            style={{
                              background: "#514ef3",
                              color: "rgb(255, 255, 255)",
                              margin: "30px auto",
                              width: "auto",
                            }}
                          >
                            Ir a diagnosticador
                          </a>
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
