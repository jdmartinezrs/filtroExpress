// 🟡 Importa las dependencias necesarias.
const express = require('express'); // Framework para aplicaciones web
const session = require('express-session'); // Middleware para manejar sesiones
const cors = require('cors'); // Middleware para habilitar CORS
const googleStrategy = require('../../application/middlewares/authenticateGoogle'); // Estrategia de autenticación de Google
const gitHubStrategy = require('../../application/middlewares/authenticateGit'); // Estrategia de autenticación de GitHub
const discordStrategy = require('../../application/middlewares/authenticateDiscord'); // Estrategia de autenticación de Discord
const userRoutes = require('../../application/routes/userRoute'); // Rutas de usuarios
const comidaRoute = require('../../application/routes/comidaRoute');
const { jsonParseErrorHandler } = require('../middlewares/errorHandling'); 
const productRoutes = require('../../application/routes/productRoute'); 
const { limiTotal } = require('../middlewares/rateLimit'); // Middleware de limitación de tasa
const cookieParser = require('cookie-parser'); // Middleware para manejar cookies

const http = require('http'); // Módulo HTTP nativo

// 🟡 Función para crear el servidor Express.
const createServer = () => {
    const app = express(); // Crea una instancia de la aplicación Express.
    const server = http.createServer(app); // Crea el servidor HTTP.

    // 🟡 Configurar CORS en la aplicación Express.
    app.use(cors({
        origin: ["http://127.0.0.1:5500", "http://localhost:5173"], // Añade aquí tus orígenes permitidos.
        credentials: true // Permitir el uso de credenciales.
    }));

    app.use(express.json()); // Middleware para analizar cuerpos de solicitudes en formato JSON.
    app.use(cookieParser()); // Middleware para analizar cookies en las solicitudes.
    app.use(jsonParseErrorHandler); // Middleware para manejar errores de análisis de JSON.
    app.use(limiTotal); // Middleware para limitar la tasa de solicitudes.

    // 🟡 Configurar la sesión en la aplicación Express.
    app.use(session({
        secret: process.env.KEY_SECRET, // Clave secreta para firmar la sesión.
        resave: false, // No re-salvar la sesión si no ha cambiado.
        saveUninitialized: true, // Guarda sesiones no inicializadas.
        cookie: { 
            secure: false, // Si se usa HTTPS, se debe establecer en true.
            httpOnly: true, // La cookie no es accesible a través de JavaScript del lado del cliente.
        }
    }));

    // 🟡 Inicializa las estrategias de autenticación.
    app.use(googleStrategy.initialize());
    app.use(googleStrategy.session());
    
    app.use(gitHubStrategy.initialize());
    app.use(gitHubStrategy.session());
    
    app.use(discordStrategy.initialize());
    app.use(discordStrategy.session());

    // 🟡 Define las rutas de la aplicación.
    app.use('/products', productRoutes);
    app.use('/users', userRoutes); // Rutas para usuarios.
    app.use('/comidas', comidaRoute); // Rutas para comidas.
    return server; // Devuelve el servidor creado.
};

// 🟡 Exporta la función createServer para su uso en otros módulos.
module.exports = createServer;
