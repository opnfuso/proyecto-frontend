import React, { useRef } from "react";
import ReactQuill from "react-quill";
import Navbar from "../containers/Navbar";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import { createManualReparacionRequest } from "../api/manual.api";
import { Field, Formik } from "formik";

function CreateReparacion() {
  const refContenido = useRef();

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Crear reparacion
                </span>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <Formik
              initialValues={{
                titulo: "",
              }}
              onSubmit={(values, { setSubmitting }) => {
                const handleSubmit = async () => {
                  Swal.fire({
                    title: "Crear una nueva reparación",
                    icon: "question",
                    showDenyButton: true,
                    confirmButtonText: "Crear",
                    denyButtonText: "Cancelar",
                  }).then(async (result) => {
                    try {
                      if (result.isConfirmed) {
                        const reparacion = {
                          titulo: values.titulo,
                          contenido: refContenido.current.value,
                        };

                        const response = await createManualReparacionRequest(
                          reparacion
                        );

                        if (response.status === 201) {
                          Swal.fire({
                            title: "Reparación creada con exito",
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
                <form onSubmit={handleSubmit}>
                  <div className="d-flex flex-column">
                    <div>
                      <Field
                        className="form-control text-center"
                        type="text"
                        placeholder="Ingrese Titulo (Falla marca modelo)"
                        name="titulo"
                        required
                      />
                    </div>
                    <div
                      id="quill-editor"
                      className="d-flex flex-column"
                      style={{ height: "100%", marginTop: 20 }}
                    />
                    <ReactQuill theme="snow" ref={refContenido} />
                    <button
                      disabled={isSubmitting}
                      className="btn btn-primary btn-detalles align-self-center my-4"
                      type="submit"
                    >
                      Guardar
                    </button>
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

export default CreateReparacion;
