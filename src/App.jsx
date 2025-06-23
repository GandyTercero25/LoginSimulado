import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Perfil from "./pages/Perfil";
import { Routes, Route } from "react-router-dom";

const USUARIO_VALIDO = {
    username: "usuario1",
    password: "123456",
};

// Simula la función que obtiene los datos del usuario
const obtenerDatosUsuario = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true; // Cambia esto para probar la simulación de éxito o error
            if (exito) {
                resolve({ nombre: "Gandy Tercero", email: "gandy.tercero@uisek.edu.ec" });
            } else {
                reject("Error al obtener datos"); // Si quieres simular un error, puedes cambiar "exito"
            }
        }, 2000);
    });
};

function App() {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState("");
    const [perfil, setPerfil] = useState(null);

    const manejarLogin = async (e) => {
        e.preventDefault();
        setError(""); // Limpiamos cualquier error previo
        setPerfil(null); // Reiniciamos el perfil por si ya se había logueado antes

        if (usuario === USUARIO_VALIDO.username && clave === USUARIO_VALIDO.password) {
            setCargando(true); // Activamos el estado de carga

            try {
                const datos = await obtenerDatosUsuario();
                setPerfil(datos); // Establecemos los datos del perfil
            } catch (err) {
                setError("Ocurrió un error al obtener los datos.");
                console.error("Error en obtenerDatosUsuario:", err); // Aquí se muestra el error completo en la consola
            } finally {
                setCargando(false); // Terminamos el proceso de carga
            }
        } else {
            setError("Credenciales incorrectas. Intenta nuevamente.");
        }
    };

    return (
        <Routes>
            <Route
                path="/"
                element={<LoginForm
                    usuario={usuario}
                    setUsuario={setUsuario}
                    clave={clave}
                    setClave={setClave}
                    manejarLogin={manejarLogin}
                    cargando={cargando}
                    error={error} />}
            />
            <Route
                path="/perfil"
                element={<Perfil nombre={perfil?.nombre} email={perfil?.email} />}
            />
        </Routes>
    );
}

export default App;
