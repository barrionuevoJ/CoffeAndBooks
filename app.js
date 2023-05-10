const express = require('express');
const app = express();
const path = require('path');

const port = 3030;

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');


const mainRoutes = require('./routers/main');
const usersRoutes = require('./routers/users');

app.use('/', mainRoutes);
app.use('/', usersRoutes);

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));