import React from "react";
import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// ? La constante INITIAL_STATE define el estado inicial del contexto de autenticación. Este estado contiene una propiedad llamada "currentUser", que se inicializa con el valor de un objeto de usuario que se almacena en el localStorage o con un valor nulo si no se encuentra en el almacenamiento local.
// ? Luego, se crea un contexto llamado AuthContext utilizando la función "createContext" de React y se le pasa el estado inicial.
// ? La función AuthContextProvider es un componente de React que proporciona el contexto AuthContext a sus hijos. Este componente utiliza el hook "useReducer" de React para mantener el estado y la función de despacho para la actualización del estado. También utiliza el hook "useEffect" de React para almacenar el estado actual del usuario en el localStorage cada vez que se actualiza.
// ? Finalmente, se devuelve un proveedor de contexto de AuthContext con los valores actuales de "currentUser" y "dispatch" como propiedades, y se renderiza dentro del componente el "children". Esto permite a los componentes hijos acceder y actualizar el estado del contexto de autenticación a través del contexto.

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};