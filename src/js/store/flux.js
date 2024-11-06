const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contact: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
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
            .then((respuesta) => {
              const datos = respuesta.json();
              return datos;
            })
            .then((datos) => {
              console.log(datos);
              setStore({ contact: datos });
            });
        } catch (error) {}
      },
      ActualizarContacto: (ID, nombre, mail, telefono, ubicacion) => {
        console.log(nombre, mail, telefono, ubicacion);
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
      CrearContacto: (nombre, mail, telefono, ubicacion) => {
        const contacto = {
          name: nombre,
          phone: telefono,
          email: mail,
          address: ubicacion,
        };

        try {
          fetch(
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
