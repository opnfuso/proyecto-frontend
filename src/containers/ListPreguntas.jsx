import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ItemPregunta from "../components/ItemPregunta";
import { Link, useSearchParams } from "react-router-dom";

function ListPreguntas({ preguntas }) {
  const [searchParams] = useSearchParams();
  const bitacoraParam = searchParams.get("bitacora");
  const dispositivo = searchParams.get("dispositivo");
  const [selectedPreguntasId, setSelectedPreguntasId] = useState([
    "633b146d4db46330d41ad1c0",
  ]);

  const [selectedPreguntas, setSelectedPreguntas] = useState([]);

  const handleChange = (value) => {
    if (!selectedPreguntasId.includes(value.value.sig)) {
      let selec = selectedPreguntasId;
      selec.push(value.value.sig);
      setSelectedPreguntasId(selec);
    }
  };

  useEffect(() => {
    if (preguntas.length > 0) {
      let preg = [];
      selectedPreguntasId.forEach((sel) => {
        if (sel) {
          preg.push(preguntas.find((e) => e._id === sel));
        }
      });
      setSelectedPreguntas(preg);
    }
  }, [selectedPreguntasId, preguntas]);

  return (
    <>
      <form className="mx-3 my-4 d-flex flex-column w-50">
        {selectedPreguntas.map((pregunta) => {
          return (
            <ItemPregunta
              key={pregunta._id}
              pregunta={pregunta}
              handleChange={handleChange}
            />
          );
        })}
      </form>
      <Link
        to={
          dispositivo
            ? `/diagnosticador/${
                selectedPreguntasId[selectedPreguntasId.length - 1]
              }?dispositivo=${dispositivo}`
            : bitacoraParam
            ? `/diagnosticador/${
                selectedPreguntasId[selectedPreguntasId.length - 1]
              }?bitacora=${bitacoraParam}`
            : `/diagnosticador/${
                selectedPreguntasId[selectedPreguntasId.length - 1]
              }`
        }
        className="btn btn-primary align-self-center btn-detalles mb-4"
        type="button"
      >
        Ir
      </Link>
    </>
  );
}

ListPreguntas.propTypes = {
  preguntas: PropTypes.arrayOf(PropTypes.object),
};

export default ListPreguntas;
