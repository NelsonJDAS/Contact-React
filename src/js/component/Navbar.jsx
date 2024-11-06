import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="p-3 bg-white border-bottom border-dark border-2">
      <Link to="/" className="text-decoration-none fw-bold text-dark">
        <h1>Web De Contactos</h1>
      </Link>
    </nav>
  );
};
