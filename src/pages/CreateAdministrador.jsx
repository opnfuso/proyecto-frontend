import React from "react";
import sideImage from "../assets/img/seated businessman in dark blue suit with laptop.png";
import logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { Field, Formik } from "formik";
import Swal from "sweetalert2";
import { createAdministradorRequest } from "../api/administrador.api";
import { editAdministradorSchema } from "../schemas/administradores/edit.schema";

function CreateAdministrador() {
  return (
    <>
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
                fecha_nacimiento: "",
                telefono: "",
                email: "",
                password: "",
              }}
              validationSchema={editAdministradorSchema}
              onSubmit={(values, { setSubmitting }) => {
                const handleSubmit = async () => {
                  Swal.fire({
                    title: "Crear un nuevo administrador",
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonText: "Crear",
                    denyButtonText: "Cancelar",
                  }).then(async (result) => {
                    try {
                      if (result.isConfirmed) {
                        const response = await createAdministradorRequest(
                          values
                        );

                        if (response.status === 201) {
                          Swal.fire({
                            title: "Administrador creado con exito",
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
              {({ handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="row">
                      <div className="col">
                        <h1>Registro de administrador</h1>
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
                              placeholder="ejemplo@gmail.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col col-md-8 offset-md-1">
                            <p>Password</p>
                          </div>
                          <div className="col offset-xl-1 col-md-10 offset-md-1">
                            <Field
                              className="form-control"
                              type="password"
                              name="password"
                              required
                              placeholder="********"
                            />
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
                          disabled={isSubmitting}
                          className="btn btn-primary"
                          type="submit"
                          value="submit"
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
            <img src={sideImage} alt="Side" />
          </div>
        </div>
      </div>

      <Link
        to="/administradores"
        className="position-absolute top-0 m-2"
        href="seleccion-usuarios.html"
      >
        <img src={logo} alt="Logo" />
      </Link>
    </>
  );
}

export default CreateAdministrador;
