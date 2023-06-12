const db = require('../database/models');
const path = require('path')

const productsAPIController = {
    'list': (req, res) => {
        db.Producto.findAll({
            include: ['categoria', 'genero', 'autor']
        })
            .then(productos => {
                let countByCategory = {};
                productos.forEach(producto => {
                    const categoria = producto.categoria.categoria;
                    if (!countByCategory[categoria]) {
                        countByCategory[categoria] = 0;
                    }
                    countByCategory[categoria]++;
                });

                let respuesta = {
                    meta: {
                        status: 200,
                        count: productos.length,
                        countByCategory: countByCategory,
                        url: 'api/productos'
                    },
                    products: productos.map(producto => {
                        return {
                            id: producto.id_producto,
                            titulo: producto.titulo,
                            descripcion: producto.descripcion,
                            genero: [{ id_genero: producto.id_genero, genero: producto.genero.genero }],
                            autor: [{ id_autor: producto.id_autor, autor: producto.autor.autor }],
                            categoria: [{ id_categoria: producto.id_categoria, categoria: producto.categoria.categoria }],
                            detail: `http://localhost:3005/api/products/${producto.id_producto}`
                        };
                    })
                }
                res.json(respuesta);
            })
    },

    'detail': (req, res) => {
        db.Producto.findByPk(req.params.id,
            {
                include: ['categoria', 'genero', 'autor']
            })
            .then(producto => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/producto/:id'
                    },
                    data: producto
                }
                res.json(respuesta);
            });
    },
}

module.exports = productsAPIController;