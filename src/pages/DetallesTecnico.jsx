import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import avatar from "../assets/img/Avatar Wrapper.png";
import cover from "../assets/img/Cover.png";
import { useParams } from "react-router-dom";
import {
  activateTecnicoRequest,
  deleteTecnicoRequest,
  getTecnicoRequest,
  updateTecnicoRequest,
} from "../api/tecnico.api";
import { Field, Formik } from "formik";
import Swal from "sweetalert2";
import { editAdministradorSchema } from "../schemas/administradores/edit.schema";

function DetallesTecnico() {
  const [tecnico, setTecnico] = useState([]);
  const params = useParams();

  const loadTecnico = async (id) => {
    try {
      const res = await getTecnicoRequest(id);

      const tecnico = {
        id: res.data.id,
        nombres: res.data.nombres,
        apellidos: res.data.apellidos,
        telefono: res.data.telefono,
        fecha_nacimiento: res.data.fecha_nacimiento.split("T")[0],
        email: res.data.email,
        activo: res.data.activo,
      };

      setTecnico(tecnico);
    } catch (error) {
      console.error(error);
    }
  };

  const handleActivate = async () => {
    Swal.fire({
      title: "Activar el tecnico",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Activar",
      denyButtonText: "Cancelar",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await activateTecnicoRequest(tecnico.id);

          if (response.status === 200) {
            Swal.fire({
              title: "Tecnico activado con exito",
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

  const handleDeactivate = async () => {
    Swal.fire({
      title: "Desactivar el tecnico",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Desactivar",
      denyButtonText: "Cancelar",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await deleteTecnicoRequest(tecnico.id);

          if (response.status === 200) {
            Swal.fire({
              title: "Tecnico desactivado con exito",
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

  useEffect(() => {
    loadTecnico(params.id);
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
                  Detalles de tecnico
                </span>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="card">
              <div>
                <img className="w-100" src={cover} alt="Cover" />
                <img
                  id="avatar-logo"
                  className="position-absolute"
                  src={avatar}
                  alt="Avatar"
                />
              </div>
            </div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                nombres: tecnico.nombres,
                apellidos: tecnico.apellidos,
                telefono: tecnico.telefono,
                fecha_nacimiento: tecnico.fecha_nacimiento,
                email: tecnico.email,
                password: "",
              }}
              validationSchema={editAdministradorSchema}
              onSubmit={(values, { setSubmitting }) => {
                const handleSubmit = async () => {
                  Swal.fire({
                    title: "Editar el tecnico",
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonText: "Editar",
                    denyButtonText: "Cancelar",
                  }).then(async (result) => {
                    try {
                      if (result.isConfirmed) {
                        const response = await updateTecnicoRequest(
                          tecnico.id,
                          values
                        );

                        if (response.status === 200) {
                          Swal.fire({
                            title: "Tecnico editado con exito",
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
                <form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
                  <div>
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
                              placeholder={3314678934}
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
                          className="btn btn-primary btn-detalles"
                          type="submit"
                          value="submit"
                          style={{ marginRight: 55 }}
                        >
                          Guardar
                        </button>
                        {tecnico.activo ? (
                          <div
                            onClick={handleDeactivate}
                            className="btn btn-primary btn-detalles"
                          >
                            Desactivar
                          </div>
                        ) : (
                          <div
                            onClick={handleActivate}
                            className="btn btn-primary btn-detalles"
                          >
                            Activar
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallesTecnico;
