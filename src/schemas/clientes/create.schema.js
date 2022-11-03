import { object, string, date } from "yup";
import "yup-phone";

export const createClienteSchema = object({
  nombres: string()
    .matches(/^[A-Za-z\s]*$/)
    .required("el nombre es requerido"),
  apellidos: string()
    .matches(/^[A-Za-z\s]*$/)
    .required("los apellidos son requeridos"),
  domicilio: string().required("el domicilio es requerido"),
  fecha_nacimiento: date()
  .max(
    //older than 9 years
    new Date(new Date().setFullYear(new Date().getFullYear() - 9)),
    "Debe ser mayor de 9 años"
  )
  .required("la fecha de nacimiento es requerida"),
  telefono: string()
    .phone("+52", true, "el numero de telefono debe de ser correcto")
    .required("el telefono es requerido"),
});
