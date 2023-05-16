const { Usuario } = require("../database/models");

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    
    if (!emailInCookie) {
        // Si la cookie no está presente, salimos del middleware y llamamos a `next()` para continuar con el siguiente middleware
        return next();
    }
    let userFromCookie = await Usuario.findOne({ where: { email: emailInCookie } })

    if (userFromCookie) {
        req.session.userLogged = userFromCookie.dataValues;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }
    next();
}

module.exports = userLoggedMiddleware;
