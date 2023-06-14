const db = require('../../database/models');

const usersAPIController = {
    'list': (req, res) => {
        db.Usuario.findAll()
            .then(usuarios => {
                let respuesta = {
                    meta: {
                        status: 200,
                        count: usuarios.length,
                        url: 'api/users'
                    },
                    users: usuarios.map(usuario => {
                        return {
                            id: usuario.id_user,
                            name: usuario.firstName,
                            email: usuario.email,
                            detail: `http://localhost:${process.env.PORT || 3005}/api/users/${usuario.id_user}`
                        };
                    })
                }
                res.json(respuesta);
            })
    },

    'detail': (req, res) => {
        db.Usuario.findByPk(req.params.id)
            .then(usuario => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: `http://localhost:${process.env.PORT || 3005}/api/products/${usuario.id_user}`
                    },
                    data: {
                        id: usuario.id_user,
                        firstName: usuario.firstName,
                        lastName: usuario.lastName,
                        email: usuario.email,
                        img_URL: `http://localhost:${process.env.PORT || 3005}/Images/users/${usuario.profileImg}`
                    }
                }
                res.json(respuesta);
            });
    },
}

module.exports = usersAPIController;