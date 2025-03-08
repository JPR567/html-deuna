// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 1) Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// 2) Configurar motor de plantillas (opcional, si usas EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 3) Parsear datos de formularios (si lo necesitas)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 4) Rutas principales
// Ejemplo: Ruta para la página de inicio
app.get('/', (req, res) => {
  // Si usas EJS:
  // res.render('index', { titulo: 'Bienvenido a De Una' });

  // Si sólo sirves un HTML estático:
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));

  // Para este ejemplo, enviemos texto:
  res.send('Bienvenido a De Una Web App con Express!');
});

// Ejemplo: Ruta GET
app.get('/productos', (req, res) => {
  // Lógica para devolver lista de productos
  const productos = [
    { id: 1, nombre: 'Producto A', precio: 10 },
    { id: 2, nombre: 'Producto B', precio: 15 }
  ];
  res.json(productos);
});

// Ejemplo: Ruta POST
app.post('/login', (req, res) => {
  const { usuario, password } = req.body;
  if (usuario === 'admin' && password === '1234') {
    res.send('Login exitoso');
  } else {
    res.status(401).send('Credenciales inválidas');
  }
});

// 5) Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
