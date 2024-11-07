import "../../styles/home.css";
import Agregar_Actualizar from "../component/Agregar-Actualizar.jsx";
import "../../styles/Agregar_Actualizar.css";
import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const AgregarContacto = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Agregar_Actualizar
        agregar_actualizar="agregar"
        funcion={actions.CrearContacto}
      />
    </>
  );
};
