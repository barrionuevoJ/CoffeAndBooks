const fs = require('fs')
const path = require('path')
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { Producto, Genero, Autor, Categoria } = require("../database/models");

const { validationResult } = require("express-validator");

const controlador = {
  cart: (req, res) => {
    res.render('/products/cart')
  },

  addCart: (req, res) => {
    let producto = Producto.findByPk(req.params.id_producto)
    res.send(producto)
  },

  all: (req, res) => {
    Producto.findAll({
      include: ["autor", "genero"]
    }).then((productos) => {
      res.render("products/productList", { lista: productos, toThousand });
    });
  },
  detail: (req, res) => {
    Producto.findByPk(req.params.id, {
      include: ["autor", "genero"],
    }).then((producto) => {
      res.render("products/productDetail", { libro: producto, toThousand });
    });
  },

  add: (req, res) => {
    let promGeneros = Genero.findAll();
    let promAutores = Autor.findAll();
    let promCategorias = Categoria.findAll();

    Promise.all([promGeneros, promAutores, promCategorias])
      .then(([generos, autores, categorias]) => {
        return res.render("products/formCreate", { generos, autores, categorias });
      })
      .catch((error) => res.send(error));
  },

  // Crear un producto
  create: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let promGeneros = Genero.findAll();
        let promAutores = Autor.findAll();
        let promCategorias = Categoria.findAll();

        Promise.all([promGeneros, promAutores, promCategorias])
          .then(([generos, autores, categorias]) => {
            return res.render("products/formCreate", { generos, autores, categorias, errors: errors.mapped(), old: req.body });
          })
          .catch((error) => res.send(error));
      }
      else {
        if (req.body.id_genero || req.body.id_autor || req.body.id_categoria) {
          await Producto.create({
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            img: req.file?.filename || 'default-image.png',
            descuento: req.body.descuento,
            id_genero: req.body.id_genero,
            id_autor: req.body.id_autor,
            id_categoria: req.body.id_categoria,
          });

          return res.redirect("/products");
        }
        else {
          return res.redirect('/products/create');
        }
      }
    } catch (error) {
      if (req.file) {
        const imagen = req.file.filename;
        const imgpath = path.resolve(__dirname, `../../public/Images/products/${imagen}`);
        if (imagen) {
          fs.unlinkSync(imgpath);
        }
      }
      return res.send(error);
    }
  },


  // Formulario de edición

  edit: function (req, res) {
    let promProducto = Producto.findByPk(req.params.id, {
      include: ["genero", "autor", "categoria"],
    });
    let promGeneros = Genero.findAll();
    let promAutores = Autor.findAll();
    let promCategorias = Categoria.findAll();
    Promise.all([promProducto, promGeneros, promAutores, promCategorias])
      .then(([Producto, generos, autores, categorias]) => {
        return res.render("products/formEdit", {
          libro: Producto,
          generos,
          autores,
          categorias,
        });
      })
      .catch((error) => res.send(error));
  },

  // Actualizar un producto
  update: async function (req, res) {
    try {
      let producto = await Producto.findByPk(req.params.id)

      // Para borrar el archivo viejo, y subir el nuevo
      let imagen = producto.img
      let imgpath = `../../public/Images/products/${imagen}`
      if (req.file) {
        fs.unlinkSync(path.resolve(__dirname, imgpath));
        imagen = req.file.filename;
      }
      await Producto.update(
        {
          titulo: req.body.titulo || producto.titulo,
          descripcion: req.body.descripcion,
          cantidad: req.body.cantidad,
          precio: req.body.precio,
          img: imagen,
          descuento: req.body.descuento,
          id_genero: req.body.id_genero,
          id_autor: req.body.id_autor,
          id_categoria: req.body.id_categoria,
        },
        {
          where: { id_producto: req.params.id },
        }
      )
      return res.redirect("/");
    } catch (error) {
      return res.send(error)
    }

  },

  // Eliminar un producto

  destroy: function (req, res) {
    let idProducto = req.params.id;

    Producto.findOne({ where: { id_producto: idProducto } })
      .then((producto) => {
        if (producto) {
          let img = producto.img;
          Producto.destroy({ where: { id_producto: idProducto }, force: true })
            .then(() => {
              if (img !== 'default-image.png') {
                fs.unlinkSync(path.resolve(__dirname, "../../public/images/products/" + img));
              }
              return res.redirect("/products");
            })
            .catch((error) => res.send(error));
        } else {
          return res.status(404).send("Producto no encontrado");
        }
      })
      .catch((error) => res.send(error));
  },

  //ordenar productos
  top: function (req, res) {
    db.producto.findAll({
      where: {
        autor: { [db.sequelize.Op.gt]: 20 }
      },
      order: [
        ["titulo", "DESC"]

      ],
      limit: 8
    })
      .then(function ([Producto, Generos, Autores, Categorias]) {
        res.render("top", { Producto: Producto })
      })
  },

};

module.exports = controlador;
