const express = require('express');

const app = express();

const mainRouter = require('./routes/main');
// Rutas API
const apiProducts = require('./routes/api/products')

app.use('/', mainRouter);
app.use('/api/products', apiProducts);

const port = 3005;

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));