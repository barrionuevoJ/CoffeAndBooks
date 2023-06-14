const express = require('express');
const path = require('path')
const env = require('dotenv')

const app = express();

const mainRouter = require('./routes/main');
// Rutas API
const apiProducts = require('./routes/api/products')
const apiUsers = require('./routes/api/users')

app.use(express.static(path.join(__dirname, '../public')))

app.use('/', mainRouter);
app.use('/api/products', apiProducts);
app.use('/api/users', apiUsers);

env.config()
const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));