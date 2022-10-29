import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";

function ItemPregunta({ pregunta, handleChange }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let op = [];

    pregunta.respuestas.forEach((respuesta) => {
      const val = {
        sig: respuesta.siguiente_pregunta,
        pregunta: respuesta.pregunta,
      };
      const opt = {
        value: val,
        label: respuesta.text,
      };

      op.push(opt);
    });

    setOptions(op);
  }, [pregunta.respuestas]);

  return (
    <label className="form-label">
      {pregunta.text + " - " + pregunta.type}
      <Select
        onChange={(value) => {
          handleChange(value);
        }}
        options={options}
      />
    </label>
  );
}

ItemPregunta.propTypes = {
  pregunta: PropTypes.object,
  handleChange: PropTypes.func,
};

export default ItemPregunta;
