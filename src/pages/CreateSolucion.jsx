import { Field, Formik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../containers/Navbar";
import { createSolucionRequest } from "../api/solucion.api";

function CreateSolucion() {
  const params = useParams();
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
                title: "Crear una nueva solucion",
                icon: "question",
                showDenyButton: true,
                confirmButtonText: "Crear",
                denyButtonText: "Cancelar",
              }).then(async (result) => {
                try {
                  if (result.isConfirmed) {
                    const solucion = {
                      text: values.text,
                      respuesta: params.id,
                    };

                    const response = await createSolucionRequest(solucion);

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
              <p>Titulo de la solucion</p>
              <Field
                className="form-control"
                type="text"
                name="text"
                placeholder="Titulo"
                required
              />
              <button
                disabled={isSubmitting}
                className="mt-2 btn btn-primary align-self-center btn-detalles"
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

export default CreateSolucion;
