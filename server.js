import http from 'http';
import app from './backend/app.js';

const port = 3000;

const server = http.createServer(app); // Usa app como el manejador de solicitudes

server.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});