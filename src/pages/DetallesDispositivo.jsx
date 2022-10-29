import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import Cover from "../assets/img/Cover.png";
import Avatar from "../assets/img/Avatar Wrapper.png";
import { Field, Formik } from "formik";
import { Link, useParams } from "react-router-dom";
import {
  getDispositivoRequest,
  updateDispositivoRequest,
} from "../api/dispositivo.api";
import Swal from "sweetalert2";

function DetallesDispositivo() {
  const [dispositivo, setDispositivo] = useState({});
  const params = useParams();

  const loadDispositivo = async (imei) => {
    try {
      const res = await getDispositivoRequest(imei);

      const dispositivo = {
        imei: res.data.imei,
        modelo: res.data.modelo,
        marca: res.data.marca,
        numero_serie: res.data.numero_serie,
        fecha_recibido: res.data.fecha_recibido.split("T")[0],
      };

      setDispositivo(dispositivo);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadDispositivo(params.id2);
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
                  Detalles de dispositivo
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
                imei: dispositivo.imei,
                modelo: dispositivo.modelo,
                marca: dispositivo.marca,
                numero_serie: dispositivo.numero_serie,
                fecha_recibido: dispositivo.fecha_recibido,
              }}
              onSubmit={(values, { setSubmitting }) => {
                const handleSubmit = async () => {
                  Swal.fire({
                    title: "Editar el dispositivo",
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonText: "Editar",
                    denyButtonText: "Cancelar",
                  }).then(async (result) => {
                    try {
                      if (result.isConfirmed) {
                        const response = await updateDispositivoRequest(
                          dispositivo.imei,
                          values
                        );

                        if (response.status === 200) {
                          Swal.fire({
                            title: "Dispositivo editado con exito",
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
                              type="number"
                              name="imei"
                              placeholder={6215731286654}
                              required
                            />
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
                            className="col-xl-5 col-md-10 offset-md-1"
                            style={{ margin: 0 }}
                          >
                            <Field
                              className="form-control"
                              type="date"
                              name="fecha_recibido"
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
                          to="bitacoras"
                          className="btn btn-primary btn-detalles"
                        >
                          Ir a bitacoras
                        </Link>
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

export default DetallesDispositivo;
