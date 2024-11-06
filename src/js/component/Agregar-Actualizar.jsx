import React, { useState } from "react";
import "../../styles/home.css";
import { useParams } from "react-router";

const Agregar_Actualizar = (props) => {
  const [nombre, setNombre] = useState("");
  const [mail, setMail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");

  const { id } = useParams();

  const agregar_actualizar =
    props.agregar_actualizar === "agregar" ? "Add Contact" : "Update Contact";

  const handleElementoName = (e) => {
    setNombre(e.target.value);
  };
  const handleElementoMail = (e) => {
    setMail(e.target.value);
  };
  const handleElementoLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleElementoPhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="text-center fw-bold formulario">
      <h2
        class={
          props.agregar_actualizar === "agregar"
            ? "text-primary"
            : "text-success"
        }
      >
        {agregar_actualizar}
      </h2>
      <div className="container-fluid w-75 mt-3 border border-dark p-3 rounded-3 my-3 bg-white">
        <form>
          <div class="mb-3">
            <label for="exampleInputName" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control text-center"
              id="exampleInputName"
              onChange={handleElementoName}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputMail" class="form-label">
              Mail
            </label>
            <input
              type="email"
              class="form-control text-center"
              id="exampleInputMail"
              onChange={handleElementoMail}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputLocation" class="form-label">
              Location
            </label>
            <input
              type="text"
              class="form-control text-center"
              id="exampleInputLocation"
              onChange={handleElementoLocation}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputName" class="form-label">
              Phone
            </label>
            <input
              type="number"
              class="form-control text-center"
              id="exampleInputName"
              onChange={handleElementoPhone}
            />
          </div>

          <button
            type="submit"
            class={
              props.agregar_actualizar === "agregar"
                ? "btn btn-primary w-100 fw-bold"
                : "btn btn-success w-100 fw-bold"
            }
            onClick={() => {
              props.agregar_actualizar === "agregar"
                ? props.funcion(nombre, mail, phone, location)
                : props.funcion(id, nombre, mail, phone, location);
            }}
          >
            Done!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Agregar_Actualizar;
