import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Navbar from "../containers/Navbar";
import CreateCliente from "../pages/CreateCliente";
import CreateDispositivo from "../pages/CreateDispositivo";
import "../styles/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/crear-dispositivo" element={<CreateDispositivo />} />
          <Route path="/crear-cliente" element={<CreateCliente />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
