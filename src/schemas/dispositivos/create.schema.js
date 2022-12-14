import { object, string, number } from "yup";

export const createDispositivoSchema = object({
  marca: string().required("la marca es requerida"),
  modelo: string().required("el modelo es requerido"),
  imei: number()
    .integer("el imei tiene que ser un entero")
    .positive("el imei tiene que ser un numero positivo")
    .test(
      "len",
      "el imei tiene que tener 15 digitos",
      (val) => val.toString().length === 15
    )
    .required("el imei es requerido"),
  numero_serie: string().required("el numero de serie es requerido"),
});
