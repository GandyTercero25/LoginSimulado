import React from "react";
// Importa React para poder crear componentes.

import { Navigate } from "react-router-dom";
// Importa `Navigate` desde `react-router-dom`, que permite redirigir a una ruta en caso de que no se cumpla una condici�n.

function RutaProtegida({ perfil, children }) {
    // Declara el componente `RutaProtegida` que recibe dos props:
    // - `perfil`: El objeto que contiene la informaci�n del usuario que est� autenticado.
    // - `children`: Los elementos hijos que se renderizar�n si el usuario tiene un perfil v�lido (es decir, si est� autenticado).

    if (!perfil) return <Navigate to="/" replace />;
    // Si no existe un `perfil` (es decir, si el usuario no est� autenticado), redirige al usuario a la p�gina de inicio (`/`).
    // El atributo `replace` evita que el usuario pueda volver a la ruta protegida utilizando el bot�n de "volver" del navegador.

    return children;
    // Si el usuario tiene un perfil (est� autenticado), renderiza los `children` que se pasaron como props (es decir, la ruta o el componente hijo al que se est� intentando acceder).
}

export default RutaProtegida;
// Exporta el componente `RutaProtegida` para que pueda ser utilizado en otros archivos de la aplicaci�n.
