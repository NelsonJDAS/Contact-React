import React from "react";
import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="row mx-1 mb-1 container-contact rounded-3 py-2">
      <div className="col-3 col-md-2">
        <img
          src="https://cdn.icon-icons.com/icons2/3250/PNG/512/person_circle_filled_icon_202012.png"
          alt=""
          className="img-fluid rounded-circle "
        />
      </div>
      <div className="col-7 col-md-8 text-center m-0 p-0">
        <div className="d-flex flex-column">
          <span>
            <i class="fa-solid fa-location-dot mx-md-3"></i>
            Venezuela,caracas,chacao
          </span>
          <span>
            <i class="fa-solid fa-phone mx-md-3"></i>+55-2949-234
          </span>
          <span>
            <i class="fa-regular fa-envelope mx-md-3"></i>
            Ejmeplodeprueba@gmail.com
          </span>
        </div>
      </div>
      <div className="col-2 col-md-2 text-end mt-1">
        <div>
          <Link to="/ActualizarContacto/43">
            <i class="fa-solid fa-pencil mx-md-2 text-success"></i>
          </Link>
          <i class="fa-regular fa-trash-can text-danger"></i>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
