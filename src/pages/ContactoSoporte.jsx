import React from "react";
import Navbar from "../containers/Navbar";

function ContactoSoporte() {
  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Contactar a soporte
                </span>
              </div>
            </div>
          </nav>
        </div>
        <form className="mx-3 my-4 d-flex flex-column w-50">
          <label className="form-label">
            Mensaje
            <textarea className="form-control my-2"></textarea>
          </label>
        </form>
        <button
          className="btn btn-primary align-self-left btn-detalles ms-4"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ContactoSoporte;
