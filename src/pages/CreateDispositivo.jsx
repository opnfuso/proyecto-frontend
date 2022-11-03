import React from "react";
import img from "../assets/img/business-3d-rear-view-of-grey-phone.png";
import { ErrorMessage, Field, Formik } from "formik";
import { createDispositivoSchema } from "../schemas/dispositivos/create.schema";
import { createDispositivoRequest } from "../api/dispositivo.api";
import logo from "../assets/img/Logo.png";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";

const CreateDispositivo = () => {
  const params = useParams();
  return (
    <div
      className="container"
      style={{
        height: "100vh",
        margin: 0,
        padding: 0,
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <div className="row vh-100">
        <div className="col-md-6 register-container d-flex flex-column justify-content-center align-items-center">
          <Formik
            initialValues={{
              marca: "",
              modelo: "",
              imei: "",
              numero_serie: "",
              fecha_recibido: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              const handleSubmit = async () => {
                Swal.fire({
                  title: "Crear un nuevo dispositivo",
                  icon: "question",
                  showDenyButton: true,
                  confirmButtonText: "Crear",
                  denyButtonText: "Cancelar",
                }).then(async (result) => {
                  try {
                    if (result.isConfirmed) {
                      const create = {
                        marca: values.marca,
                        modelo: values.modelo,
                        imei: values.imei,
                        numero_serie: values.numero_serie,
                        fecha_recibido: values.fecha_recibido,
                        id_cliente: +params.id,
                      };

                      const response = await createDispositivoRequest(create);

                      if (response.status === 201) {
                        Swal.fire({
                          title: "Dispositivo creado con exito",
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
            validationSchema={createDispositivoSchema}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form 
              
              onSubmit={handleSubmit}>
                <div>
                  <div className="row">
                    <div className="col">
                      <h1>Registro de dispositivo</h1>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ marginTop: 10, marginRight: 0, marginLeft: 0 }}
                  >
                    <div className="col">
                      <div className="row">
                        <div
                          className="col col-md-8 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <p>Marca</p>
                        </div>
                        <div
                          className="col col-md-10 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <Field
                            className="form-control"
                            type="text"
                            name="marca"
                            placeholder="apple"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="marca" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col col-md-8 offset-md-1">
                          <p>Modelo</p>
                        </div>
                        <div className="col col-md-10 offset-md-1">
                          <Field
                            className="form-control"
                            type="text"
                            name="modelo"
                            placeholder="iphone 12"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="modelo" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ marginTop: 10, marginRight: 0, marginLeft: 0 }}
                  >
                    <div className="col">
                      <div className="row">
                        <div
                          className="col col-md-8 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <p>IMEI</p>
                        </div>
                        <div
                          className="col col-md-10 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <Field
                            className="form-control"
                            type="text"
                            name="imei"
                            placeholder={6215731286654}
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="imei" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col col-md-8 offset-md-1">
                          <p>N.Serie</p>
                        </div>
                        <div className="col col-md-10 offset-md-1">
                          <Field
                            className="form-control"
                            type="text"
                            name="numero_serie"
                            placeholder="DNQDQJMH0DXT"
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="numero_serie" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row"
                    style={{ marginTop: 10, marginRight: 0, marginLeft: 0 }}
                  >
                    <div className="col">
                      <div className="row">
                        <div
                          className="col col-md-8 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <p>Fecha de recibido</p>
                        </div>
                        <div
                          className="col col-md-10 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <Field
                            className="form-control"
                            type="date"
                            name="fecha_recibido"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="date" name="fecha_recibido" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className="col d-flex align-items-center justify-content-center"
                      style={{ marginTop: 50 }}
                    >
                      <button
                        className="btn btn-primary"
                        type="submit"
                        value="submit"
                        disabled={isSubmitting}
                      >
                        Registrar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div className="col-md-6 img-container">
          <img src={img} style={{ width: 350 }} alt="Phone" />
        </div>
      </div>
      <Link
        to={`/clientes/${params.id}/dispositivos`}
        className="position-absolute top-0 m-2"
        href="seleccion-usuarios.html"
      >
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default CreateDispositivo;
