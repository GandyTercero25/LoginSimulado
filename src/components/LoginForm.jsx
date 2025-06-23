import React from "react";
// Importa React, la librería principal para construir componentes de UI en React.

import { FaUser, FaLock } from "react-icons/fa";
// Importa dos íconos de la librería react-icons/fa: FaUser (usuario) y FaLock (contraseña) para usarlos en los campos de entrada.

import { useNavigate } from "react-router-dom";
// Importa el hook `useNavigate` de react-router-dom que permite redirigir al usuario a otras rutas después de una acción.

function LoginForm({
    usuario,
    setUsuario,
    clave,
    setClave,
    manejarLogin,
    cargando,
    error,
}) {
    // Declara el componente funcional `LoginForm` que recibe varias props:
    // - `usuario` y `clave` son los valores de los campos de texto.
    // - `setUsuario` y `setClave` son las funciones para actualizar estos valores.
    // - `manejarLogin` es la función que se ejecuta al enviar el formulario.
    // - `cargando` es un estado que indica si el proceso de login está en curso.
    // - `error` es un mensaje de error que se muestra si las credenciales son incorrectas.

    const navigate = useNavigate();
    // Usa el hook `useNavigate` para crear una función de navegación, que permite redirigir a otra ruta (por ejemplo, a la página de perfil después de iniciar sesión).

    const handleLogin = async (e) => {
        // `handleLogin` es una función que se ejecuta cuando se envía el formulario. Recibe el evento `e` como parámetro.

        await manejarLogin(e);
        // Llama a la función `manejarLogin`, que es asincrónica y maneja la validación del login. Se usa `await` para esperar a que termine antes de continuar.

        if (!error) {
            // Si no hay error después de intentar el login, es decir, si las credenciales son correctas, redirige a la ruta de perfil.

            navigate("/perfil");
            // Redirige a la ruta "/perfil" usando `navigate`.
        }
    };

    return (
        <form onSubmit={handleLogin} className="space-y-6">
            {/* El formulario tiene un `onSubmit` que ejecuta la función `handleLogin` al enviarlo. También tiene un `className` para agregar margen entre los elementos. */}

            <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">
                Iniciar sesión
            </h1>
            {/* Título del formulario, centrado, con un tamaño de fuente grande, negrita y un color gris oscuro. */}

            <div className="relative">
                {/* Contenedor con posición relativa para que los íconos se coloquen correctamente. */}
                <FaUser className="absolute left-3 top-3 text-gray-500" />
                {/* Ícono de usuario (FaUser), posicionado de manera absoluta dentro del contenedor, en la parte superior izquierda. */}
                <input
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {/* Campo de texto para ingresar el usuario, con los siguientes estilos:
                    - `w-full` para que ocupe todo el ancho disponible.
                    - `px-10` y `py-3` para el espaciado interno.
                    - `border border-gray-300` para un borde gris claro.
                    - `rounded-lg` para bordes redondeados.
                    - `focus:outline-none focus:ring-2 focus:ring-purple-600` para un borde morado al hacer foco. */}
            </div>

            <div className="relative">
                {/* Otro contenedor para la contraseña, con la misma estructura que el campo de usuario. */}
                <FaLock className="absolute left-3 top-3 text-gray-500" />
                {/* Ícono de candado (FaLock), posicionado de manera similar al de usuario. */}
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                    className="w-full px-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                {/* Campo de texto para ingresar la contraseña, con el mismo estilo que el de usuario. */}
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* Si existe un error, se muestra un mensaje en color rojo. El mensaje de error es pasado como prop al componente. */}

            <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
            >
                {/* Botón para enviar el formulario con el siguiente estilo:
                    - `bg-purple-600` para un fondo morado.
                    - `text-white` para texto blanco.
                    - `py-3` para un espaciado vertical.
                    - `rounded-lg` para bordes redondeados.
                    - `hover:bg-purple-700` para cambiar el color de fondo a morado más oscuro al pasar el mouse.
                    - `transition` para animación suave al hacer hover. */}
                {cargando ? (
                    <div className="flex justify-center">
                        <div className="animate-spin border-4 border-t-4 border-transparent rounded-full w-6 h-6"></div>
                        {/* Si está cargando, muestra un spinner animado con una animación de giro. Se crea con un borde circular y la propiedad `animate-spin`. */}
                    </div>
                ) : (
                    "Iniciar sesión"
                )}
            </button>
            {/* Si no está cargando, muestra el texto "Iniciar sesión". De lo contrario, muestra el spinner de carga. */}
        </form>
    );
}

export default LoginForm;
