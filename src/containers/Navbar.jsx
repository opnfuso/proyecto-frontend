import React from "react";
import logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import "../assets/fonts/fontawesome-all.min.css";
import "../assets/fonts/ionicons.min.css";
import "../assets/fonts/typicons.min.css";
import "../styles/Navbar-Right-Links-icons.css";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <nav
      className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
      id="navbar-sidebar-wrapper"
    >
      <div className="container-fluid d-flex flex-column p-0">
        <Link
          className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <img src={logo} style={{ width: 40, height: 40 }} alt="Logo" />
          </div>
          <div className="sidebar-brand-text mx-3">
            <span>Brand</span>
          </div>
        </Link>
        <hr className="sidebar-divider my-0" />
        {isAuthenticated ? (
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <Link className="nav-link" to="/usuarios">
                <i className="fas fa-users" />
                <span>Usuarios</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/perfil" className="nav-link">
                <i className="fas fa-user" style={{ width: 15, height: 15 }} />
                <span>Perfil</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/diagnosticador" className="nav-link" href="#">
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
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/manual" className="nav-link" href="#">
                <i className="icon ion-ios-bookmarks" />
                <span>Manual</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/refacciones" className="nav-link">
                <i className="typcn typcn-spanner-outline" />
                <span>Refacciones</span>
              </Link>
            </li>
            <li className="nav-item">
              <div
                onClick={() => logout({ returnTo: window.location.origin })}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
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
              </div>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item">
              <div
                onClick={() => loginWithRedirect()}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                  style={{ width: 17, height: 17 }}
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
                <span>Iniciar Sesión</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
