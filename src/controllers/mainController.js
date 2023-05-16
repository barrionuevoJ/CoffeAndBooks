const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { Producto } = require("../database/models");

const mainController = {
    index: async (req, res) => {
        try {
            const ofertas = await Producto.findAll({
                where: { id_categoria: '1' },
                include: ["autor"]
            });
            const masVendidos = await Producto.findAll({
                where: { id_categoria: '2' },
                include: ["autor"]
            });
            const interes = await Producto.findAll({
                where: { id_categoria: '3' },
                include: ["autor"]
            });
            res.render('main/index', { masVendidos, ofertas, interes, toThousand });
        } catch (error) {
            console.error(error);
            res.send(error);
        }
    },
};




module.exports = mainController;