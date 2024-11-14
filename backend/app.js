// app.js
import { pool } from './mysql.js';

async function realizarConsulta() {
    try {
        const [filas] = await pool.query('SELECT * FROM usuarios');
        return filas; // Devuelve las filas obtenidas
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        throw error; // Lanza el error para manejarlo en el servidor
    }
}

const app = async (req, res) => {
    if (req.method === 'GET' && req.url === '/usuarios') {
        try {
            const usuarios = await realizarConsulta();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(usuarios)); // Envía los usuarios como respuesta
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error al obtener los usuarios');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
};

export default app; // Exporta la función app