import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import Cover from "../assets/img/Cover.png";
import Avatar from "../assets/img/Avatar Wrapper.png";
import { Field, Formik } from "formik";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import {
  activateClienteRequest,
  deleteClienteRequest,
  getClienteRequest,
  updateClienteRequest,
} from "../api/cliente.api";

function DetallesCliente() {
  const [cliente, setCliente] = useState({});
  const params = useParams();

  const loadCliente = async (id) => {
    try {
      const res = await getClienteRequest(id);

      const cliente = {
        id: res.data.id,
        nombres: res.data.nombres,
        apellidos: res.data.apellidos,
        telefono: res.data.telefono,
        domicilio: res.data.domicilio,
        fecha_nacimiento: res.data.fecha_nacimiento.split("T")[0],
        activo: res.data.activo,
      };

      setCliente(cliente);
    } catch (error) {
      console.error(error);
    }
  };

  const handleActivate = async () => {
    Swal.fire({
      title: "Activar el cliente",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Activar",
      denyButtonText: "Cancelar",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await activateClienteRequest(cliente.id);

          if (response.status === 200) {
            Swal.fire({
              title: "Cliente activado con exito",
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
      title: "Desactivar el cliente",
      icon: "question",
      showDenyButton: true,
      confirmButtonText: "Desactivar",
      denyButtonText: "Cancelar",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await deleteClienteRequest(cliente.id);

          if (response.status === 200) {
            Swal.fire({
              title: "Cliente desactivado con exito",
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
    loadCliente(params.id);
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
                  Detalles de cliente
                </span>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <div className="card">
              <div>
                <img className="w-100" src={Cover} alt="Cover" />
                <img
                  id="avatar-logo"
                  className="position-absolute"
                  src={Avatar}
                  alt="Avatar"
                />
              </div>
            </div>
            <Formik
              enableReinitialize={true}
              initialValues={{
                nombres: cliente.nombres,
                apellidos: cliente.apellidos,
                domicilio: cliente.domicilio,
                fecha_nacimiento: cliente.fecha_nacimiento,
                telefono: cliente.telefono,
              }}
              onSubmit={(values, { setSubmitting }) => {
                const handleSubmit = async () => {
                  Swal.fire({
                    title: "Editar el cliente",
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonText: "Editar",
                    denyButtonText: "Cancelar",
                  }).then(async (result) => {
                    try {
                      if (result.isConfirmed) {
                        const response = await updateClienteRequest(
                          cliente.id,
                          values
                        );

                        if (response.status === 200) {
                          Swal.fire({
                            title: "Cliente editado con exito",
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
                            <p>Domicilio</p>
                          </div>
                          <div
                            className="col-xxl-11 col-md-10 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <Field
                              className="form-control"
                              type="text"
                              name="domicilio"
                              placeholder="Fray miguel pieras 48"
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
                        <Link
                          to="dispositivos"
                          className="btn btn-primary btn-detalles"
                          href="vista-dispositivos.html"
                        >
                          Ir a dispositivos
                        </Link>
                        {cliente.activo ? (
                          <div
                            onClick={handleDeactivate}
                            className="btn btn-primary btn-detalles ms-5"
                          >
                            Desactivar
                          </div>
                        ) : (
                          <div
                            onClick={handleActivate}
                            className="btn btn-primary btn-detalles ms-5"
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

export default DetallesCliente;
