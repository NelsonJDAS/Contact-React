import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-3 bg-white border-bottom border-dark border-2">
      <div className="row">
        <div className="col-8 d-flex">
          <h1 className="fw-bold text-dark">Web De Contactos</h1>
          <Link to="/" className="text-decoration-none ">
            <span className="mx-2 fw-bold text-primary">home</span>
          </Link>
        </div>
        <div className="col-4 text-end">
          <Link to="/AgregarContacto" className="text-decoration-none fw-bold">
            <h3>Crear Contacto</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};
