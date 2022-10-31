import React from "react";
import PropTypes from "prop-types";
import Respuestas from "./Respuestas";

function Pregunta({ pregunta, respuestas }) {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center flex-column">
      <label
        className="form-label"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        {pregunta.text}
      </label>
      <Respuestas respuestas={respuestas} key={pregunta._id} />
      <button
        onClick={() => {
          window.history.go(-1);
        }}
        className="btn btn-primary btn-vistas"
      >
        Regresar
      </button>
    </div>
  );
}

Pregunta.propTypes = {
  pregunta: PropTypes.object,
  respuestas: PropTypes.arrayOf(PropTypes.object),
};

export default Pregunta;
