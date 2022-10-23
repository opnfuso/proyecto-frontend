import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../containers/Navbar";
import { getManualReparacionRequest } from "../api/manual.api";

function Reparacion() {
  const [reparacion, setReparacion] = useState({});
  const params = useParams();

  const getReparacion = async () => {
    const res = await getManualReparacionRequest(params.id);

    setReparacion(res.data);
  };

  useEffect(() => {
    getReparacion();
  });

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <a className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Reparacion
                </span>
              </a>
            </div>
          </nav>
          <div className="container-fluid d-flex flex-column">
            <div className="d-flex justify-content-center">
              <label
                className="form-label"
                style={{
                  padding: 12,
                  borderStyle: "solid",
                  borderColor: "#7e92a2",
                  borderRadius: 8,
                  marginBottom: 20,
                }}
              >
                {reparacion.titulo}
              </label>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: reparacion.contenido }}
            ></div>
            {/* <div>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 1&nbsp;Remueve los tornillos pentalobulares
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  Apaga el iPhone antes de empezar a desmontarlo.
                </li>
                <li className="ql-align-justify">
                  Retira los dos tornillos pentalobulares P2 de 6,75 mm de
                  longitud situados en el borde inferior del iPhone.
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 2&nbsp;Coloca cinta sobre cualquier grieta
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  Si tu iPhone tiene la pantalla rota, mantén la rotura
                  contenida y evita lastimarte durante la reparación colocando
                  una cinta sobre el vidrio.
                </li>
                <li className="ql-align-justify">
                  Coloca tiras superpuestas de cinta de embalaje sobre la
                  pantalla del iPhone hasta cubrir toda la cara.
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 3&nbsp;Calienta el borde inferior del iPhone
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  Utiliza un secador de pelo o una pistola de calor
                  o&nbsp;prepara un iOpener&nbsp;y aplícalo en el borde inferior
                  del iPhone durante un minuto aproximadamente para ablandar el
                  adhesivo que hay debajo.
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 4&nbsp;Aplica ventosa(s)
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  Coloca las ventosas cerca del borde inferior del iPhone: una
                  en la parte delantera y otra en la trasera.
                </li>
                <li className="ql-align-justify">
                  Presiona ambas ventosas firmemente en su lugar.
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 5&nbsp;Levanta la pantalla ligeramente
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  <span
                    style={{
                      fontFamily:
                        'Lato, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
                    }}
                  >
                    Introduce una púa de apertura en el hueco que hay bajo la
                    pantalla en el borde inferior del iPhone.
                  </span>
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 6&nbsp;Separa el adhesivo de la pantalla
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  <span
                    style={{
                      fontFamily:
                        'Lato, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
                    }}
                  >
                    Desliza la púa de apertura alrededor de la esquina inferior
                    izquierda y hacia arriba por el borde izquierdo del iPhone,
                    cortando el adhesivo que sujeta la pantalla.
                  </span>
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>Paso 7</span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  El borde superior de la pantalla está asegurado tanto con
                  pegamento como con clips.
                </li>
                <li className="ql-align-justify">
                  Inserta la púa en el borde derecho del teléfono. Deslízala
                  alrededor de la esquina superior derecha y a través del borde
                  superior.
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 8&nbsp;Abre el iPhone
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  Abre el iPhone girando la pantalla hacia arriba desde el lado
                  derecho, como la tapa de un libro.
                </li>
                <li className="ql-align-justify">
                  No intentes separar la pantalla por completo todavía, ya que
                  varios cables planos frágiles aún la conectan a la placa
                  lógica del iPhone.
                </li>
                <li className="ql-align-justify">
                  Apoya la pantalla contra algo para mantenerla apoyada mientras
                  trabajas en el teléfono.
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 9&nbsp;Desatornilla la tapa del conector de la batería y
                </span>
              </h2>
              <ul>
                <li className="ql-align-justify">
                  <span
                    style={{
                      fontFamily:
                        'Lato, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif',
                    }}
                  >
                    Retira los dos tornillos Y000 de 1.1 mm de longitud que
                    sujetan la batería y la tapa del conector de la pantalla.
                  </span>
                </li>
              </ul>
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 10&nbsp;Remueve la tapa del conector de la batería y la
                  pantalla.
                </span>
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 11&nbsp;Desconecta la batería
                </span>
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 12&nbsp;Desconectar el cable de la pantalla
                </span>
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 13&nbsp;Desconecta el cable del digitalizador
                </span>
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 14&nbsp;Desatornilla la tapa del conector del sensor
                  frontal
                </span>{" "}
                y todos los cables conectados al display y a la tarjeta
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 15&nbsp;Remueve el ensamblaje de la pantalla
                </span>
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>
                  Paso 16&nbsp;Re
                </span>
                tira del display viejo el altavoz y el sensor
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>Paso 17&nbsp;</span>
                En el nuevo display conecta los altavoces y sensor del viejo
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>Paso 18&nbsp;v</span>
                uelve a conectar todos los cables del nuevo display a la tarjeta
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>Paso 19&nbsp;a</span>
                tornilla las tapas de los conectores
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>Paso 20&nbsp;C</span>
                onecta y atornilla la bateria
              </h2>
              <br />
              <h2 className="ql-align-justify">
                <span style={{ color: "rgb(33, 36, 38)" }}>Paso 21&nbsp;C</span>
                ierra el display y atornillalo por debajo
              </h2>
              <br />
            </div> */}
            {/* <a
              className="btn btn-primary btn-detalles align-self-center m-4 w-auto"
              href="#"
            >
              Llenar en bitacora
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reparacion;
