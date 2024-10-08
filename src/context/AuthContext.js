import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/firebase'; // Importa tu configuración de Firebase
import { signOut } from 'firebase/auth'; // Importamos la función de signOut

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Listener para cambios en el estado de autenticación
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // Si el usuario existe, obtenemos su información básica (email)
        const { email } = user;

        // Guardamos solo el email en el estado del usuario
        const userInfo = {
          email: email || '', // Email o valor por defecto si no existe
        };
        setCurrentUser(userInfo);
      } else {
        // Si no hay usuario, seteamos null
        setCurrentUser(null);
      }
    });

    return unsubscribe; // Limpieza del listener al desmontar el componente
  }, []);

  // Función para cerrar sesión
  const logout = async () => {
    try {
      await signOut(auth); // Cerramos sesión con Firebase
      setCurrentUser(null); // Reiniciamos el usuario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
