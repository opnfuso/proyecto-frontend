import { object, string, number, date } from "yup";

export const createDispositivoSchema = object({
  marca: string().required("la marca es requerida"),
  modelo: string().required("el modelo es requerido"),
  imei: number()
    .positive("el imei tiene que ser un numero positivo")
    .integer("el imei tiene que ser un entero")
    .required("el imei es requerido"),
  Nserie: string().required("el numero de serie es requerido"),
  Frecibido: date().required("la fecha de entrada es requerida"),
});
