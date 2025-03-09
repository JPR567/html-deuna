const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar carpeta de archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.resolve(__dirname, 'public')));

// Rutas para servir las vistas correctamente
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', '1.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', '2.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', '3.html'));
});

app.get('/pagina4', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', '4.html'));
});

// Manejo de rutas inexistentes (Error 404)
app.use((req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, 'views', '404.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
