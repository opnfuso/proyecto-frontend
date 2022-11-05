import React from "react";
import Navbar from "../containers/Navbar";
import { sendEmailRequest } from "../api/email.api";
import { Field, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import Swal from "sweetalert2";

function ContactoSoporte() {
  const [searchParams] = useSearchParams();
  const dispositivo = searchParams.get("dispositivo");
  const bitacora = searchParams.get("bitacora");
  const pregunta = searchParams.get("pregunta");

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
        <Formik
          initialValues={{
            mensaje: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            const handleSubmit = async () => {
              Swal.fire({
                title: "Enviar el mensaje a soporte",
                icon: "question",
                showDenyButton: true,
                confirmButtonText: "Enviar",
                denyButtonText: "Cancelar",
              }).then(async (result) => {
                try {
                  if (result.isConfirmed) {
                    let disp = "";

                    if (dispositivo) {
                      disp = `Dispositivo ${dispositivo}`;
                    } else if (bitacora) {
                      disp = `Bitacora ${bitacora}`;
                    }

                    const response = await sendEmailRequest(
                      values.mensaje,
                      disp,
                      pregunta
                    );
                    if (response.status === 201) {
                      Swal.fire({
                        title: "Mensaje enviado con exito",
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
              <label className="form-label">
                Mensaje
                <Field
                  name="mensaje"
                  as="textarea"
                  className="form-control my-2"
                  required
                ></Field>
              </label>
              <button
                disabled={isSubmitting}
                className="btn btn-primary align-self-left btn-detalles ms-4"
                type="submit"
              >
                Enviar
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactoSoporte;
