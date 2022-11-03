import { object, string, number, date } from "yup";

export const createDispositivoSchema = object({
  marca: string().required("la marca es requerida"),
  modelo: string().required("el modelo es requerido"),
  imei: number()
    .positive("el imei tiene que ser un numero positivo")
    .lessThan(999999999999999, "el imei tiene que ser de 15 digitos")
    .integer("el imei tiene que ser un entero")
    .required("el imei es requerido"),
    numero_serie: string().required("el numero de serie es requerido"),
    fecha_recibido: date()
  .max(
    new Date(), 
    "la fecha no puede ser mayor a la actual"
    )
  .required("la fecha de entrada es requerida"),
});
