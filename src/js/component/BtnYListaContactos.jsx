import React, { useContext, useEffect, useState } from "react";
import Contacto from "./Contacto.jsx";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const BtnYListaContactos = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="fondo">
      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-lg-6 col-12 align-content-center">
            <div className="d-flex flex-column text-center container-btn rounded-2 mx-3 border border-dark">
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
          <div className="col-lg-6 col-12 container-contacts">
            <div className="d-flex flex-column mx-lg-3">
              {store.contact.map((elem) => {
                return (
                  <Contacto
                    nombre={elem.name}
                    telefono={elem.phone}
                    mail={elem.email}
                    ubicacion={elem.address}
                    id={elem.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BtnYListaContactos;
