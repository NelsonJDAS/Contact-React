import React from "react";

const Agregar_Actualizar = (props) => {
  const agregar_actualizar =
    props.agregar_actualizar === "agregar" ? "Add Contact" : "Update Contact";

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
            <input type="text" class="form-control" id="exampleInputName" />
          </div>

          <div class="mb-3">
            <label for="exampleInputMain" class="form-label">
              Mail
            </label>
            <input type="email" class="form-control" id="exampleInputMain" />
          </div>

          <div class="mb-3">
            <label for="exampleInputLocation" class="form-label">
              Location
            </label>
            <input type="text" class="form-control" id="exampleInputLocation" />
          </div>

          <div class="mb-3">
            <label for="exampleInputName" class="form-label">
              Phone
            </label>
            <input type="tel" class="form-control" id="exampleInputName" />
          </div>

          <button
            type="submit"
            class={
              props.agregar_actualizar === "agregar"
                ? "btn btn-primary w-100 fw-bold"
                : "btn btn-success w-100 fw-bold"
            }
          >
            Done!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Agregar_Actualizar;
