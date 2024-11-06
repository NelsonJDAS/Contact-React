import React from "react";
import { Link } from "react-router-dom";

const AgregarTarea = () => {
  return (
    <div className="col-lg-6 col-12 align-content-center">
      <div className="d-flex flex-column text-center">
        <h2 className="fw-bold">Web de contactos</h2>
        <p>Simple y facil de agendar contactos</p>
        <p>Se requerira Ubicacion | Telefono | Mail</p>
        <Link to="/AgregarContacto">
          <button className="btn btn-outline-primary m-3 w-50">
            Agregar Contacto
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AgregarTarea;
