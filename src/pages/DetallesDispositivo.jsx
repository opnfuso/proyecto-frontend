import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import Cover from "../assets/img/Cover.png";
import Avatar from "../assets/img/Avatar Wrapper.png";
import { Field, Formik, ErrorMessage } from "formik";
import { Link, useParams } from "react-router-dom";
import {
  getDispositivoRequest,
  updateDispositivoRequest,
} from "../api/dispositivo.api";
import Swal from "sweetalert2";
import { createDispositivoSchema } from "../schemas/dispositivos/create.schema";

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
              validationSchema={createDispositivoSchema}
              enableReinitialize={true}
              initialValues={{
                imei: dispositivo.imei,
                modelo: dispositivo.modelo,
                marca: dispositivo.marca,
                numero_serie: dispositivo.numero_serie,
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
                              disabled
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
                              disabled
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
                              disabled
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
                              disabled
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
