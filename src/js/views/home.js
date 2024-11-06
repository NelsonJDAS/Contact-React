import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import ListaContactos from "../component/ListaContactos.jsx";
import { Context } from "../store/appContext";

export const Home = () => {
  return (
    <div>
      <ListaContactos />
    </div>
  );
};
