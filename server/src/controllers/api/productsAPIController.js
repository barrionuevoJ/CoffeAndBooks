const db = require('../../database/models');

const productsAPIController = {
    'list': (req, res) => {
        db.Producto.findAll({
            include: ['categoria', 'genero', 'autor']
        })
            .then(productos => {
                let countByCategory = [];
                productos.forEach(producto => {
                    const categoria = producto.categoria.categoria;
                    const existingCategory = countByCategory.find(item => item.categoria === categoria);
                    if (existingCategory) {
                        existingCategory.count++;
                    } else {
                        countByCategory.push({ categoria: categoria, count: 1 });
                    }
                });


                let respuesta = {
                    meta: {
                        status: 200,
                        count: productos.length,
                        countByCategory: countByCategory,
                        url: 'api/products'
                    },
                    data: productos.map(producto => {
                        return {
                            id: producto.id_producto,
                            titulo: producto.titulo,
                            descripcion: producto.descripcion,
                            img: producto.img,
                            genero: [{ id_genero: producto.id_genero, genero: producto.genero.genero }],
                            autor: [{ id_autor: producto.id_autor, autor: producto.autor.autor }],
                            categoria: [{ id_categoria: producto.id_categoria, categoria: producto.categoria.categoria }],
                            detail: `http://localhost:${process.env.PORT || 3005}/api/products/${producto.id_producto}`
                        };
                    })
                }
                res.json(respuesta);
            })
    },

    detail: (req, res) => {
        db.Producto.findByPk(req.params.id, {
            include: ['categoria', 'genero', 'autor']
        })
            .then(producto => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: `http://localhost:${process.env.PORT || 3005}/api/products/${producto.id_producto}`
                    },
                    data: {
                        ...producto.dataValues,
                        categoria: producto.categoria.dataValues,
                        genero: producto.genero.dataValues,
                        autor: producto.autor.dataValues,
                        img_URL: `http://localhost:${process.env.PORT || 3005}/Images/products/${producto.img}`
                    }
                };
                res.json(respuesta);
            })
    },
}
//HOLA PROFE LAUTI, VALEN?? NONO SOY THIAGO A LAS 4AM AYUDANDO EN LA API, QUE ME SUMEN PUNTOS, O QUE LE SAQUEN PUNTOS
//A ADRIEL QUE EN VES DE AYUDARNOS A CODIFICAR SE PUSO MOLESTO CON LA ORTOGRAFIA 😊😊
module.exports = productsAPIController;