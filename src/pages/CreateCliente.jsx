import React from "react";
import img from "../assets/img/business-3d-joyful-young-black-man-jumping.png";
import logo from "../assets/img/Logo.png";
import { ErrorMessage, Field, Formik } from "formik";
import Swal from "sweetalert2";
import { createClienteSchema } from "../schemas/clientes/create.schema";
import { createClienteRequest } from "../api/cliente.api";
import { Link } from "react-router-dom";

const CreateCliente = () => {
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
              nombres: "",
              apellidos: "",
              domicilio: "",
              fecha_nacimiento: "",
              telefono: "",
              email: "",
            }}
            onSubmit={(values, { setSubmitting }) => {
              const handleSubmit = async () => {
                Swal.fire({
                  title: "Crear un nuevo cliente",
                  icon: "question",
                  showDenyButton: true,
                  confirmButtonText: "Crear",
                  denyButtonText: "Cancelar",
                }).then(async (result) => {
                  try {
                    if (result.isConfirmed) {
                      const response = await createClienteRequest(values);

                      if (response.status === 201) {
                        Swal.fire({
                          title: "Cliente creado con exito",
                          icon: "success",
                        });
                      }
                    }
                  } catch (error) {
                    console.error(error);
                    if (error.response && error.response.status === 409) {
                      Swal.fire({
                        title:
                          "El cliente con ese email ya existe en el sistema",
                        icon: "error",
                      });
                    } else {
                      Swal.fire({
                        title: "Hubo un error",
                        icon: "error",
                      });
                    }
                  }
                });
              };

              handleSubmit();
              setSubmitting(false);
            }}
            validationSchema={createClienteSchema}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="row">
                    <div className="col">
                      <h1>Registro de cliente</h1>
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
                          <p>Nombre/s</p>
                        </div>
                        <div
                          className="col col-md-10 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <Field
                            className="form-control"
                            type="text"
                            name="nombres"
                            placeholder="Saul Alexis"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="nombres" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col col-md-8 offset-md-1">
                          <p>Apellidos</p>
                        </div>
                        <div className="col col-md-10 offset-md-1">
                          <Field
                            className="form-control"
                            type="text"
                            name="apellidos"
                            placeholder="Perez Rincon"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="apellidos" />
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
                          <p>Domicilio</p>
                        </div>
                        <div
                          className="col col-md-10 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <Field
                            className="form-control"
                            type="text"
                            name="domicilio"
                            placeholder="Fray miguel pieras 48"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="domicilio" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div
                          className="col col-md-8 offset-md-1 mt-2"
                          style={{ margin: 0 }}
                        >
                          <p>Email</p>
                        </div>
                        <div
                          className="col col-md-10 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <Field
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="votero9414@hostovz.com"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="text" name="email" />
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
                          <p>Fecha de nacimiento</p>
                        </div>
                        <div
                          className="col col-md-10 offset-md-1"
                          style={{ margin: 0 }}
                        >
                          <Field
                            className="form-control"
                            type="date"
                            name="fecha_nacimiento"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="date" name="fecha_nacimiento" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col col-md-8 offset-md-1">
                          <p>Telefono</p>
                        </div>
                        <div className="col col-md-10 offset-md-1">
                          <Field
                            className="form-control"
                            type="tel"
                            name="telefono"
                            placeholder="+523314678934"
                            required
                          />
                          <div style={{ color: "red" }}>
                            <ErrorMessage type="tel" name="telefono" />
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
          <img src={img} style={{ width: 350 }} alt="Person" />
        </div>
      </div>
      <Link to={"/clientes"} className="position-absolute top-0 m-2">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default CreateCliente;
