import React, { useEffect } from "react";
import "../../styles/home.css";
import ListaContactos from "../component/ListaContactos.jsx";

export const Home = () => {
  useEffect(() => {
    try {
      actions.CrearUsuario();
    } catch (error) {
      console.log("Usuario ya creado");
    }
  }, []);
  return (
    <div>
      <ListaContactos />
    </div>
  );
};
