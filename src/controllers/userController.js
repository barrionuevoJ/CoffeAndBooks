const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { Usuario } = require("../database/models");

const { validationResult } = require("express-validator");

const controlador = {
  profile: (req, res) => {
    return res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  // Formulario de registro
  register: (req, res) => {
    res.render("users/register", {});
  },

  // HACER EL UPDATE 

  edit: (req, res) => {
    res.render("users/editProfile", {
      user: req.session.userLogged
        
    });
  },


  update: async (req, res) => {

    try {
      let usuario = await Usuario.findByPk(req.params.id)

      let imagen = usuario.profileImg
      let imgpath = `../../public/Images/users/${imagen}`
      if (req.file) {
        fs.unlinkSync(path.resolve(__dirname, imgpath));
        imagen = req.file.filename;
      }
      await Usuario.update(
        {
          firstName: req.body.firstName || usuario.firstName,
          lastName: req.body.lastName || usuario.lastName,
          email: req.body.email || usuario.email,
          profileImg: imagen,
          password: bcrypt.hashSync(req.body.password, 10) || usuario.password
        },
        { where: { id_user: usuario.id_user } }
      )
      res.send(usuario)
    }
    catch (error) {
      res.send(error)
    }
  },

  // Proceso de creacion de un nuevo usuario
  newUser: (req, res) => {
    let user = req.body;
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      Usuario.findOne({ where: { email: req.body.email } })
        .then((foundUser) => {
          if (foundUser) {
            if (req.file) {
              fs.unlinkSync(
                path.resolve(
                  __dirname,
                  "../../public/images/users/" + req.file.filename
                )
              );
            }
            let errors = {
              email: {
                msg: "Email existente",
              },
            };
            delete req.body.password;
            res.render("users/register", { errors, old: req.body });
          } else {
            user.profileImg = req.file ? req.file.filename : "default-user.png";
            delete user["passwordConfirm"];
            user.password = bcrypt.hashSync(user.password, 10);
            Usuario.create(user)
              .then(() => {
                res.redirect("/users/login/");
              })
              .catch((error) => {
                res.send(error);
              });
          }
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      if (req.file) {
        fs.unlinkSync(
          path.resolve(
            __dirname,
            "../../public/images/users/" + req.file.filename
          )
        );
      }
      delete req.body.password;
      res.render("users/register", { errors: errors.mapped(), old: req.body });
    }
  },

  login: (req, res) => {
    res.render("users/login", {});
  },

  loginProcess: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      Usuario.findOne({
        where: {
          email: req.body.email,
        },
      })
        .then((userToLogin) => {
          if (userToLogin) {
            let isOkThePassword = bcrypt.compareSync(
              req.body.password,
              userToLogin.password
            );
            if (isOkThePassword) {
              delete userToLogin.password;
              req.session.userLogged = userToLogin;
              if (req.body.checkUser) {
                res.cookie("userEmail", req.body.email, {
                  maxAge: 1000 * 60 * 60,
                });
              }

              return res.redirect("/");
            }
            else {
              return res.render("users/login"
              , {
                errors: {
                  password: {
                    msg: "Contraseña incorrecta",
                  },
                },
                old: req.body
              }
            );
            }
          }

          return res.render("users/login"
            , {
              errors: {
                email: {
                  msg: "Este correo no esta en nuestra base de datos",
                },
              },
              old: req.body
            }
          );

        })
        .catch((error) => {
          res.send(error);
        });
    }
    else {
      return res.render("users/login", { errors: errors.mapped(), old: req.body });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    return res.redirect("/users/login");
  },

  // Proceso de eliminacion de un usuario
  userDestroy: function (req, res) {
    Usuario.findOne({ where: { id_user: req.params.id } })
      .then((user) => {
        if (user) {
          let img = user.profileImg;
          Usuario.destroy({ where: { id_user: req.params.id }, force: true })
            .then(() => {
              if (img !== 'default-user.png') {
                fs.unlinkSync(path.resolve(__dirname, "../../public/images/users/" + img));
              }
              if (req.session.userLogged.id == req.params.id) {
                res.locals.isLogged = false;
              } else {
                req.cookies.userEmail = res.cookie(
                  "userEmail",
                  req.session.userLogged.email,
                  { maxAge: 1000 * 60 * 60 }
                );
              }
              res.redirect("/users/usersList");
            })
            .catch((error) => res.send(error));
        } else {
          return res.send("Usuario no encontrado");
        }
      })
      .catch((error) => {
        res.send(error);
      });
  },

  userList: (req, res) => {
    Usuario.findAll().then((usuarios) => {
      res.render("users/usersList", { users: usuarios });
    });
  },

  cart: (req, res) => {
    // const carrito = productModel.carrito();
    res.render("users/productCart", { carrito, toThousand });
  },

  addCart: (req, res) => {
    res.redirect("/users/productCart");
  },

  // HACER EL UPDATE 

  update: async (req, res) => {
    try {
      let usuario = await Usuario.findByPk(req.params.id)

      let imagen = usuario.profileImg
      let imgpath = `../../public/Images/users/${imagen}`
      if (req.file) {
        fs.unlinkSync(path.resolve(__dirname, imgpath));
        imagen = req.file.filename;
      }
      await Usuario.update(
        {
          firstName: req.body.firstName || usuario.firstName,
          lastName: req.body.lastName || usuario.lastName,
          email: req.body.email || usuario.email,
          profileImg: imagen,
          password: bcrypt.hashSync(req.body.password, 10) || usuario.password
        },
        { where: { id_user: usuario.id_user } }
      )
      res.send(usuario)
    }
    catch (error) {
      res.send(error)
    }
  },
};

module.exports = controlador;
