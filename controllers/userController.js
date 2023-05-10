const controlador = {
    login: (req, res) => {
        res.render('login', {});
    },

    register: (req, res) => {
        res.render('register', {});
    },

    formCyE: (req,res) => {
        res.render('formCyE', {})
    }
}

module.exports = controlador;