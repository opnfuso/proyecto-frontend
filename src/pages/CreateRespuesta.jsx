import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import { getPreguntasRequest } from "../api/pregunta.api";
import { createRespuestaRequest } from "../api/respuestas.api";
import { Field, Formik } from "formik";
import Select from "react-select";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function CreateRespuesta() {
  const [preguntas, setPreguntas] = useState([]);
  const [seleccion, setSeleccion] = useState({});
  const params = useParams();

  const getRespuestas = async () => {
    const res = await getPreguntasRequest();

    const preguntas = [];

    res.data.forEach((pregunta) => {
      let pre;
      if (pregunta.type) {
        pre = {
          value: pregunta._id,
          label: `${pregunta.text} - ${pregunta.type}`,
        };
      } else {
        pre = {
          value: pregunta._id,
          label: pregunta.text,
        };
      }

      preguntas.push(pre);
    });

    setPreguntas(preguntas);
  };

  useEffect(() => {
    getRespuestas();
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
                  Crear respuesta
                </span>
              </div>
            </div>
          </nav>
        </div>
        <Formik
          initialValues={{
            text: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            const handleSubmit = async () => {
              Swal.fire({
                title: "Crear una nueva respuesta",
                icon: "question",
                showDenyButton: true,
                confirmButtonText: "Crear",
                denyButtonText: "Cancelar",
              }).then(async (result) => {
                let respuesta;
                try {
                  if (result.isConfirmed) {
                    if (seleccion) {
                      respuesta = {
                        pregunta: params.id,
                        text: values.text,
                        siguiente_pregunta: seleccion.value,
                      };
                    } else {
                      respuesta = {
                        pregunta: params.id,
                        text: values.text,
                      };
                    }

                    const response = await createRespuestaRequest(respuesta);

                    if (response.status === 201) {
                      Swal.fire({
                        title: "Respuesta creada con exito",
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
            <form
              onSubmit={handleSubmit}
              className="mx-3 my-4 d-flex flex-column w-50"
            >
              <p>Titulo de la respuesta</p>
              <Field
                className="form-control"
                type="text"
                name="text"
                maxlength={25}
                placeholder="Titulo"
                required
              />
              <p className="mt-2">Siguiente pregunta</p>
              <Select
                isClearable={true}
                onChange={(seleccion) => setSeleccion(seleccion)}
                options={preguntas}
                className="mb-2"
              />
              <button
                disabled={isSubmitting}
                className="btn btn-primary align-self-center btn-detalles"
                type="submit"
              >
                Crear
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default CreateRespuesta;
