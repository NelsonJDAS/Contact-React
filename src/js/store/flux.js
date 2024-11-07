const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contact: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      CrearUsuario: () => {
        // const store = getStore();
        const respuesta = fetch(
          "https://playground.4geeks.com/contact/agendas/Usuario_Contact",
          {
            method: "POST",
          }
        );
      },

      ConseguirTodasLasAgendas: () => {
        try {
          fetch(
            "https://playground.4geeks.com/contact/agendas/Usuario_Contact/contacts"
          )
            .then((respuesta) => respuesta.json())
            .then((datos) => {
              setStore({ contact: datos.contacts });
            });
        } catch (error) {}
      },
      ActualizarContacto: (ID, nombre, mail, telefono, ubicacion) => {
        const contactoActualizado = {
          name: nombre,
          phone: telefono,
          email: mail,
          address: ubicacion,
        };
        try {
          fetch(
            `https://playground.4geeks.com/contact/agendas/Usuario_Contact/contacts/${ID}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contactoActualizado),
            }
          );
        } catch (error) {}
      },

      EliminarContacto: (ID) => {
        console.log(ID);
        try {
          fetch(
            `https://playground.4geeks.com/contact/agendas/Usuario_Contact/contacts/${ID}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (error) {}
      },
      CrearContacto: async (nombre, mail, telefono, ubicacion) => {
        const contacto = await {
          name: nombre,
          phone: telefono,
          email: mail,
          address: ubicacion,
        };

        try {
          await fetch(
            "https://playground.4geeks.com/contact/agendas/Usuario_Contact/contacts",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contacto),
            }
          );
        } catch (error) {}
      },
    },
  };
};

export default getState;
