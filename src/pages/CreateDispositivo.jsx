import React from "react";
import img from "../assets/img/business-3d-rear-view-of-grey-phone.png";
import { Formik } from "formik";

const CreateDispositivo = () => {
  return (
    <div
      className="container"
      style={{ height: "100vh", margin: 0, padding: 0, maxWidth: "100vw" }}
    >
      <div className="row vh-100">
        <div className="col-md-6 register-container d-flex flex-column justify-content-center align-items-center">
          <Formik
            initialValues={{
              marca: "",
              modelo: "",
              imei: "",
              Nserie: "",
              Frecibido: "",
            }}
          >
            <form>
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
                        <input
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
                        <input
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
                        <input
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
                        <input
                          className="form-control"
                          type="text"
                          name="Nserie"
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
                        className="col col-md-10 offset-md-1"
                        style={{ margin: 0 }}
                      >
                        <input
                          className="form-control"
                          type="date"
                          name="Frecibido"
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
          </Formik>
        </div>
        <div className="col-md-6 img-container">
          <img src={img} style={{ width: 350 }} alt="Phone" />
        </div>
      </div>
    </div>
  );
};

export default CreateDispositivo;
