import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Navbar from "../containers/Navbar";
import { checkRole } from "../api/auth.api";
import PropTypes from "prop-types";
import Pregunta from "../containers/Pregunta";
import DiagnosticoSelector from "../containers/DiagnosticoSelector";
import { useParams } from "react-router-dom";

function DiagnosticadorGeneral() {
  const [isSoporte, setIsSoporte] = useState(false);
  const [containsParams, setContainsParams] = useState(false);
  const { user, isAuthenticated } = useAuth0();

  const params = useParams();

  const check = async (claim) => {
    const res = await checkRole(claim.sub, "Soporte");
    setIsSoporte(res.data.containsRole);
  };

  useEffect(() => {
    if (isAuthenticated) {
      check(user);
    }

    if (params && params.id) {
      setContainsParams(true);
    }
  }, [isAuthenticated, params, user]);

  return (
    <div id="wapper">
      <Navbar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-light navbar-expand-md py-3">
            <div className="container d-flex justify-content-between">
              <div className="navbar-brand d-flex align-items-center" href="#">
                <span style={{ color: "rgb(9,44,77)", fontWeight: "bold" }}>
                  Diagnosticador
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="table-responsive mx-3"
          style={{ background: "#eff3f7" }}
        >
          {containsParams ? <DiagnosticoSelector /> : <></>}
        </div>
        <Pregunta />
      </div>
    </div>
  );
}

export default DiagnosticadorGeneral;
