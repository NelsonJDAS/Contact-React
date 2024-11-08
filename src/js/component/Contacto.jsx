import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Contacto = (props) => {
  const [contacto, setContacto] = useState([]);
  const [Delete, setDelete] = useState(false);
  const { store, actions } = useContext(Context);
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-danger" id="exampleModalLabel">
                Seguro que quieres eliminar al contacto
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body d-flex flex-column">
              <p>
                Importante: No podras recuperar el contacto una vez eliminado
              </p>
              <p className="fw-bold text-dark"> Nombre</p>
              <span>
                <i class="fa-solid fa-location-dot mx-md-3 px-3"></i>
                Ubicacion
              </span>
              <span>
                <i class="fa-solid fa-phone mx-md-3 px-3"></i>
                Movil
              </span>
              <span>
                <i class="fa-regular fa-envelope mx-md-3 px-3"></i>
                Correo
              </span>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success w-100"
                data-bs-dismiss="modal"
                onClick={() => {
                  setDelete(true);
                  actions.ConseguirTodasLasAgendas();
                }}
              >
                Si, Estoy seguro
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-1 container-contact rounded-3 py-2 bg-white contacto">
        <div className="col-3 col-md-2">
          <img
            src="https://cdn.icon-icons.com/icons2/3250/PNG/512/person_circle_filled_icon_202012.png"
            alt=""
            className="img-fluid rounded-circle "
          />
        </div>
        <div className="col-7 col-md-8 m-0 p-0">
          <div className="d-flex flex-column fw-bold">
            <h5 className="text-center">{props.nombre}</h5>
            <span>
              <i class="fa-solid fa-location-dot mx-md-3 px-3"></i>
              {props.ubicacion}
            </span>
            <span>
              <i class="fa-solid fa-phone mx-md-3 px-3"></i>
              {props.telefono}
            </span>
            <span>
              <i class="fa-regular fa-envelope mx-md-3 px-3"></i>
              {props.mail}
            </span>
          </div>
        </div>
        <div className="col-2 col-md-2 text-end mt-1">
          <div>
            <Link to={`/ActualizarContacto/${props.id}`}>
              <i class="fa-solid fa-pencil mx-md-2 text-success"></i>
            </Link>
            <i
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="fa-regular fa-trash-can text-danger cursor"
              onClick={() => {
                setContacto({
                  nombre: props.nombre,
                  ubicacion: props.ubicacion,
                  telefono: props.telefono,
                  mail: props.mail,
                });

                Delete === true ? "" : actions.EliminarContacto(props.id);
              }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
