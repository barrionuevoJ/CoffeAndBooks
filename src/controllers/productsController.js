const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { Producto, Genero, Autor, Categoria } = require("../database/models");

const controlador = {

  db: (req, res) => {
    Producto.findAll().then((productos) => {
      res.send(productos);
    });
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
        return res.render("products/formCreate");
      })
      .catch((error) => res.send(error));
  },

  // Crear un producto
  create: function (req, res) {
    console.log(req.body);
    Producto.create({
      titulo: req.body.titulo,
      descripcion: req.body.descripcion,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
      img: req.body.img,
      descuento: req.body.descuento,
      id_genero: req.body.id_genero,
      id_autor: req.body.id_autor,
      id_categoria: req.body.id_categoria,
    })
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },

  // Formulario de edición

  edit: function (req, res) {
    let idProducto = req.params.id;
    let promProducto = Producto.findByPk(idProducto, {
      include: ["genero", "autor", "categoria"],
    });
    let promGeneros = Genero.findAll();
    let promAutores = Autor.findAll();
    let promCategorias = Categoria.findAll();
    Promise.all([promProducto, promGeneros, promAutores, promCategorias])
      .then(([Producto, Generos, Autores, Categorias]) => {
        return res.render("products/formEdit", {
          Producto,
          Generos,
          Autores,
          Categorias,
        });
      })
      .catch((error) => res.send(error));
  },

  // Actualizar un producto
  update: function (req, res) {
    let idProducto = req.params.id;
    Producto.update(
      {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        img: req.body.img,
        descuento: req.body.descuento,
      },
      {
        where: { id: idProducto },
      }
    )
      .then(() => {
        return res.redirect("/products");
      })
      .catch((error) => res.send(error));
  },

  // Eliminar un producto

  destroy: function (req, res) {
    let idProducto = req.params.id;
    Producto.destroy({ where: { id: idProducto }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then(() => {
        return res.redirect("/products");
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
