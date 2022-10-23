import React from "react";
import PropTypes from "prop-types";

function Pregunta(props) {
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
        Que sistema operativo tiene?
      </label>
      <div className="d-flex w-100 my-4 justify-content-center flex-wrap">
        <button className="btn btn-primary btn-diag" type="button">
          iOS
        </button>
        <button className="btn btn-primary btn-diag" type="button">
          Android
        </button>
      </div>
    </div>
  );
}

Pregunta.propTypes = {};

export default Pregunta;
