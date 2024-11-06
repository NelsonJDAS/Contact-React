import React from "react";
import Contacto from "./Contacto.jsx";
import AgregarTarea from "./AgregarTareaHtml.jsx";

const ListaContactos = (Lista) => {
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <AgregarTarea />
        <div className="col-lg-6 col-12 container-contacts">
          <div className="d-flex flex-column mx-lg-3">
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
            <Contacto />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaContactos;
