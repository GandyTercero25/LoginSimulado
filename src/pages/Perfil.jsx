import React from "react";
// Importa React para poder crear componentes funcionales.

function Perfil({ nombre, email }) {
    // Declara el componente `Perfil` que recibe dos props:
    // - `nombre`: El nombre del usuario, que será mostrado en el perfil.
    // - `email`: El email del usuario, que también será mostrado en el perfil.

    return (
        <div className="text-center">
            {/* Contenedor principal con clase para alinear el contenido al centro */}
            <h1 className="text-2xl font-semibold text-gray-700">Bienvenido/a</h1>
            {/* Título principal con tamaño de fuente 2xl, fuente seminegrita y color gris-700 */}
            <p className="text-lg text-gray-600 mt-4">
                {/* Párrafo que muestra el nombre del usuario */}
                <strong>Nombre:</strong> {nombre}
                {/* Muestra el nombre del usuario, usando `nombre` que viene como prop */}
            </p>
            <p className="text-lg text-gray-600 mt-2">
                {/* Párrafo que muestra el email del usuario */}
                <strong>Email:</strong> {email}
                {/* Muestra el email del usuario, usando `email` que viene como prop */}
            </p>
        </div>
    );
}

export default Perfil;
// Exporta el componente `Perfil` para que pueda ser utilizado en otros archivos de la aplicación.
