import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Layout from "../containers/Layout";
import Navbar from "../containers/Navbar";
import CreateAdministrador from "../pages/CreateAdministrador";
import CreateCliente from "../pages/CreateCliente";
import CreateDispositivo from "../pages/CreateDispositivo";
import DetallesAdministradores from "../pages/DetallesAdministradores";
import DetallesCliente from "../pages/DetallesCliente";
import Perfil from "../pages/Perfil";
import Refacciones from "../pages/Refacciones";
import SeleccionUsuarios from "../pages/SeleccionUsuarios";
import VistaAdministradores from "../pages/VistaAdministradores";
import VistaClientes from "../pages/VistaClientes";
import VistaDispositivos from "../pages/VistaDispositivos";
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
          <Route path="/new/administrador" element={<CreateAdministrador />} />
          <Route path="/clientes" element={<VistaClientes />} />
          <Route path="/clientes/:id" element={<DetallesCliente />} />
          <Route
            path="/clientes/:id/dispositivos"
            element={<VistaDispositivos />}
          />
          <Route path="/tecnicos" element={<VistaTecnicos />} />
          <Route path="/new/dispositivo" element={<CreateDispositivo />} />
          <Route path="/new/cliente" element={<CreateCliente />} />
          <Route path="/refacciones" element={<Refacciones />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
