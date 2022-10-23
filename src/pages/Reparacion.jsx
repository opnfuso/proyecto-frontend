import React from "react";

function Reparacion() {
  return (
    <div id="wapper">
      <nav
        className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
        id="navbar-sidebar-wrapper"
      >
        <div className="container-fluid d-flex flex-column p-0 position-sticky top-0">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <img
                src="assets/img/Logo.png"
                style={{ width: 40, height: 40 }}
              />
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>Brand</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <a className="nav-link" href="seleccion-usuarios.html">
                <i className="fas fa-users" />
                <span>Usuarios</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="perfil-usuario.html">
                <i className="fas fa-user" style={{ width: 15, height: 15 }} />
                <span>Perfil</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="diagnosticador.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-diagram-3-fill"
                  style={{ width: 15, height: 15, fontSize: 21 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1z"
                  />
                </svg>
                <span>Diagnosticador</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="manual-menu.html">
                <i className="icon ion-ios-bookmarks" />
                <span>Manual</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="refacciones.html">
                <i className="typcn typcn-spanner-outline" />
                <span>Refacciones</span>
              </a>
              <a className="nav-link" href="blank.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ width: 17, height: 17 }}
                >
                  <path
                    d="M8.51428 20H4.51428C3.40971 20 2.51428 19.1046 2.51428 18V6C2.51428 4.89543 3.40971 4 4.51428 4H8.51428V6H4.51428V18H8.51428V20Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
                    fill="currentColor"
                  />
                </svg>
                <span>Cerrar sesion</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
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
                Cambio de display iphone 12
              </label>
            </div>
            <div>
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
            </div>
            <a
              className="btn btn-primary btn-detalles align-self-center m-4 w-auto"
              href="#"
            >
              Llenar en bitacora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reparacion;
