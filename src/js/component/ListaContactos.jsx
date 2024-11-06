import React, { useContext, useEffect, useState } from "react";
import Contacto from "./Contacto.jsx";
import AgregarTarea from "./AgregarTareaHtml.jsx";
import { Context } from "../store/appContext.js";

const ListaContactos = () => {
  const { store, actions } = useContext(Context);
  const { contactos, setContactos } = useState(store.contact);
  useEffect(() => {
    actions.ConseguirTodasLasAgendas();
  }, []);
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <AgregarTarea />
        <div className="col-lg-6 col-12 container-contacts">
          <div className="d-flex flex-column mx-lg-3">
            <button
              onClick={() => {
                console.log(contactos);
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaContactos;
