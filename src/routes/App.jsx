import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import Layout from "../containers/Layout";
import Navbar from "../containers/Navbar";
import CreateAdministrador from "../pages/CreateAdministrador";
import CreateBitacora from "../pages/CreateBitacora";
import CreateCliente from "../pages/CreateCliente";
import CreateDispositivo from "../pages/CreateDispositivo";
import CreateReparacion from "../pages/CreateReparacion";
import CreateRespuesta from "../pages/CreateRespuesta";
import CreateSolucion from "../pages/CreateSolucion";
import CreateTecnico from "../pages/CreateTecnico";
import DetallesAdministradores from "../pages/DetallesAdministradores";
import DetallesBitacora from "../pages/DetallesBitacora";
import DetallesCliente from "../pages/DetallesCliente";
import DetallesDispositivo from "../pages/DetallesDispositivo";
import DetallesTecnico from "../pages/DetallesTecnico";
import Diagnosticador from "../pages/Diagnosticador";
import DiagnosticadorGeneral from "../pages/DiagnosticadorGeneral";
import DiagnosticoRapido from "../pages/DiagnosticoRapido";
import Manual from "../pages/Manual";
import Perfil from "../pages/Perfil";
import Refacciones from "../pages/Refacciones";
import Reparacion from "../pages/Reparacion";
import SeleccionUsuarios from "../pages/SeleccionUsuarios";
import ViewRespuesta from "../pages/ViewRespuesta";
import VistaAdministradores from "../pages/VistaAdministradores";
import VistaBitacoras from "../pages/VistaBitacoras";
import VistaClientes from "../pages/VistaClientes";
import VistaDispositivos from "../pages/VistaDispositivos";
import VistaSolucion from "../pages/VistaSolucion";
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
          <Route
            path="/clientes/:id/dispositivos/:id2"
            element={<DetallesDispositivo />}
          />
          <Route path="/new/dispositivo" element={<CreateDispositivo />} />
          <Route path="/new/cliente" element={<CreateCliente />} />
          <Route
            path="/clientes/:id/dispositivos/:id2/bitacoras"
            element={<VistaBitacoras />}
          />
          <Route
            path="/clientes/:id/dispositivos/:id2/bitacoras/new"
            element={<CreateBitacora />}
          />
          <Route
            path="/clientes/:id/dispositivos/:id2/bitacoras/:id3"
            element={<DetallesBitacora />}
          />
          <Route path="/tecnicos" element={<VistaTecnicos />} />
          <Route path="/tecnicos/:id" element={<DetallesTecnico />} />
          <Route path="/new/tecnico" element={<CreateTecnico />} />
          <Route path="/refacciones" element={<Refacciones />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/diagnosticador" element={<Diagnosticador />} />
          <Route
            path="/diagnosticador/:id"
            element={<DiagnosticadorGeneral />}
          />
          <Route path="/diagnosticador/new/:id" element={<CreateRespuesta />} />
          <Route
            path="/diagnosticador-rapido"
            element={<DiagnosticoRapido />}
          />
          <Route path="/respuesta/:id" element={<ViewRespuesta />} />
          <Route path="/solucion/:id" element={<VistaSolucion />} />
          <Route path="/new/solucion/:id" element={<CreateSolucion />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/new/manual" element={<CreateReparacion />} />
          <Route path="/manual/:id" element={<Reparacion />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
