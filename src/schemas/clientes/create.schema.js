import { object, string, date } from "yup";
import "yup-phone";

export const createClienteSchema = object({
  nombres: string().required("el nombre es requerido"),
  apellidos: string().required("los apellidos son requeridos"),
  domicilio: string().required("el domicilio es requerido"),
  fecha_nacimiento: date().required("la fecha de nacimiento es requerida"),
  telefono: string()
    .phone("+52", true, "el numero de telefono debe de ser correcto")
    .required("el telefono es requerido"),
});
