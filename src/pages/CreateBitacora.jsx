import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../containers/Navbar.jsx";
import { createBitacoraRequest } from "../api/bitacora.api";
import { getClienteRequest } from "../api/cliente.api";
import { useParams } from "react-router-dom";
import { Field, Formik } from "formik";
import Swal from "sweetalert2";
import { getDispositivoRequest } from "../api/dispositivo.api";

function CreateBitacora() {
  // const [bitacora, setBitacora] = useState({ fecha_salida: "" });
  const [dispositivo, setDispositivo] = useState({
    marca: "",
    modelo: "",
    imei: 0,
    fecha_recibido: "",
  });
  const [cliente, setCliente] = useState({});
  // const [reparado, setReparado] = useState(false);
  // const [options1, setOptions1] = useState([]);
  // const [options2, setOptions2] = useState([]);
  // const [inputList1, setInputList1] = useState([]);
  // const [inputValuesList1, setInputValuesList1] = useState([]);
  // const [inputList2, setInputList2] = useState([]);
  // const [inputValuesList2, setInputValuesList2] = useState([]);
  // const [defaultinputList1, setDefaultInputList1] = useState([]);
  // const [defaultinputList2, setDefaultInputList2] = useState([]);
  const params = useParams();

  const getDispositivo = async (id) => {
    const res = await getDispositivoRequest(id);

    setDispositivo(res.data);
  };

  const getCliente = async (id) => {
    const res = await getClienteRequest(id);

    setCliente(res.data);
  };

  // const getReparaciones = async () => {
  //   const res = await getManualesReparacionesRequest();

  //   let options = [];

  //   res.data.forEach((tecnico) => {
  //     options.push({
  //       value: tecnico.id,
  //       label: tecnico.titulo,
  //     });
  //   });

  //   setOptions1(options);

  //   // setReparaciones(res.data);
  // };

  // const getTecnicos = async () => {
  //   const res = await getTecnicosRequest();

  //   let options = [];

  //   res.data.forEach((tecnico) => {
  //     options.push({
  //       value: tecnico.id,
  //       label: tecnico.nombres + " " + tecnico.apellidos,
  //     });
  //   });

  //   setOptions2(options);

  //   // setTecnicos(res.data);
  // };

  // const handleClick1 = () => {
  //   setInputList1(
  //     inputList1.concat(
  //       <Select
  //         className="mt-2"
  //         options={options1}
  //         onChange={(val) => {
  //           setInputValuesList1(inputValuesList1.concat(val));
  //         }}
  //       />
  //     )
  //   );
  // };

  // const handleClick2 = () => {
  //   setInputList2(
  //     inputList2.concat(
  //       <Select
  //         className="mt-2"
  //         options={options2}
  //         onChange={(val) => {
  //           setInputValuesList2(inputValuesList2.concat(val));
  //         }}
  //       />
  //     )
  //   );
  // };

  // const createReparacionesBitacoras = async () => {
  //   try {
  //     inputValuesList1.forEach(async (value) => {
  //       const create = {
  //         manualReparacionesId: value.value,
  //         bitacoraId: params.id3,
  //       };

  //       await createReparacionBitacoraRequest(create);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     Swal.fire({
  //       title: "Hubo un error",
  //       icon: "error",
  //     });
  //   }
  // };

  // const createTecnicosBitacoras = async () => {
  //   try {
  //     inputValuesList2.forEach(async (value) => {
  //       const create = {
  //         tecnicoId: value.value,
  //         bitacoraId: params.id3,
  //       };

  //       await createTecnicoBitacoraRequest(create);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     Swal.fire({
  //       title: "Hubo un error",
  //       icon: "error",
  //     });
  //   }
  // };

  useEffect(() => {
    getCliente(params.id);
    getDispositivo(params.id2);
    // getBitacora(params.id3);
    // getTecnicos();
    // getReparaciones();
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
                  initialValues={{
                    terminado: false,
                    fecha_salida: null,
                    notas: null,
                    costo: null,
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const handleSubmit = async () => {
                      Swal.fire({
                        title: "Crear la bitacora",
                        icon: "question",
                        showDenyButton: true,
                        confirmButtonText: "Crear",
                        denyButtonText: "Cancelar",
                      }).then(async (result) => {
                        try {
                          if (result.isConfirmed) {
                            const create = {
                              imei_dispositivo: params.id2,
                              terminado: values.terminado,
                              fecha_salida: values.fecha_salida,
                              notas: values.notas,
                              costo: values.costo,
                            };

                            const response = await createBitacoraRequest(
                              create
                            );

                            if (response.status === 201) {
                              Swal.fire({
                                title: "Bitacora creada con exito",
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
                                    <Field
                                      className="form-control"
                                      type="date"
                                      name="fecha_salida"
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <Field
                            className="form-control"
                            name="notas"
                            placeholder="notas de bitacora:"
                            rows={4}
                            defaultValue={""}
                            as="textarea"
                          />
                          <label className="form-label my-4">
                            Costo total
                            <Field
                              className="form-control"
                              type="number"
                              name="costo"
                              placeholder={300}
                            />
                          </label>
                        </div>
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          class="btn btn-primary"
                        >
                          Crear
                        </button>
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

export default CreateBitacora;
