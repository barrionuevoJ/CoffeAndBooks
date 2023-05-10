const jsonDB = require('../model/jsonDatabase');
const productModel = jsonDB('products')
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { validationResult } = require('express-validator')

const controlador = {

    // Mostrar todos los productos
    all: (req, res) => {
        const listaProductos = productModel.all()
        res.render('productList', { lista: listaProductos, toThousand })
    },

    // Mostrar un producto
    detail: (req, res) => {
        const product = productModel.find(req.params.id)
        res.render('productDetail', { libro: product, toThousand })
    },

    // Crear un producto
    create: (req, res) => {
        res.render('formCreate')
    },


    // Guardar un producto

    store: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            if (req.file) {
                fs.unlinkSync(
                    path.resolve(__dirname, '../../public/Images/products/' + req.file.filename)
                )
            }
            return res.render('formCreate', {
                errors: resultValidation.mapped(),
                old: req.body
            });
        }
        else {
            let product = req.body;
            product.img = req.file ? req.file.filename : 'default-image.png';
            productModel.create(product);

        }
        return res.redirect('/products/');
    },

    // Editar un producto
    edit: (req, res) => {
        let productToEdit = productModel.find(req.params.id)
        res.render('formEdit', { libro: productToEdit })
    },

    // Actualizar un producto
    update: (req, res) => {
        // let productToEdit = productModel.find(req.params.id)

        // productToEdit = {
        //     id: productToEdit.id,
        //     ...req.body,
        //     img: productToEdit.img,
        // }

        // productModel.update(productToEdit)
        // res.redirect("/products/detail/" + req.params.id);

        let id = req.params.id;
        let dataUpdate = req.body;

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const product = productModel.find(id);
            let imagen = req.file.filename;

            dataUpdate.img = imagenes.length > 0 ? imagenes : product.image;

            if (imagenes.length > 0 && product.image) {
                let files = product.img;
                files = files.filter(img => img != 'default-image.png')
                for (let i = 0; i < files.length; i++) {
                    fs.unlinkSync(path.resolve(__dirname, '../../public/images/' + files[i]));
                }
            };

            let productUpdate = {
                id: id,
                ...dataUpdate,
            }
            productModel.update(productUpdate);
            res.redirect('/products');
        } else {
            if (req.file) {
                let { file } = req;
                fs.unlinkSync(path.resolve(__dirname, '../../public/images/' + file.filename))

            };
            res.render('products/formEdit', { errors: errors.mapped(), oldData: req.body, id });
        }
    },

    // Eliminar un producto
    destroy: function (req, res) {
        productModel.delete(req.params.id);
        res.redirect("/products/");
    }

};



module.exports = controlador;