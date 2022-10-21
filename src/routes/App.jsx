import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Layout from "../containers/Layout";
import Navbar from "../containers/Navbar";
import CreateCliente from "../pages/CreateCliente";
import CreateDispositivo from "../pages/CreateDispositivo";
import DetallesAdministradores from "../pages/DetallesAdministradores";
import SeleccionUsuarios from "../pages/SeleccionUsuarios";
import VistaAdministradores from "../pages/VistaAdministradores";
import VistaClientes from "../pages/VistaClientes";
import VistaTecnicos from "../pages/VistaTecnicos";
import "../styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/usuarios" element={<SeleccionUsuarios />} />
          <Route
            path="/administradores"
            element={
              <ProtectedRoute component={VistaAdministradores} rol="Soporte" />
            }
          />
          <Route
            path="/administradores/:id"
            element={<DetallesAdministradores />}
          />
          <Route path="/clientes" element={<VistaClientes />} />
          <Route path="/tecnicos" element={<VistaTecnicos />} />
          <Route path="/crear-dispositivo" element={<CreateDispositivo />} />
          <Route path="/crear-cliente" element={<CreateCliente />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
