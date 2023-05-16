const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const { Usuario } = require("../database/models");

const { validationResult } = require("express-validator");

const controlador = {
  // Sprint 5

  // profile: (req, res) => {
  //     return res.render('users/profile', {
  //         user: req.session.userLogged
  //     });
  // },

  // login: (req, res) => {
  //     res.render('users/login', {});
  // },
  // loginProcess: (req, res) => {
  //     let userToLogin = userModel.findByField('email', req.body.email);

  //     if (userToLogin) {
  //         let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
  //         if (isOkThePassword) {
  //             delete userToLogin.password;
  //             req.session.userLogged = userToLogin;

  //             if (req.body.checkUser) {
  //                 res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
  //             }

  //             return res.redirect('/');
  //         }
  //         return res.render('users/login', {
  //             errors: {
  //                 email: {
  //                     msg: 'Las credenciales no son válidas'
  //                 }
  //             }
  //         });
  //     }

  //     return res.render('users/login', {
  //         errors: {
  //             email: {
  //                 msg: 'no se encuentra este email en nuestra base de datos'
  //             }
  //         }
  //     });
  // },

  // logout: (req, res) => {
  //     req.session.destroy();
  //     res.clearCookie('userEmail');
  //     return res.redirect('/users/login');
  // },

  // userDestroy: function (req, res) {
  //     const user = userModel.find(req.params.id)
  //     if (user.profileimg != 'default-user.png') {
  //         fs.unlinkSync(
  //             path.resolve(__dirname, '../../public/images/users/' + user.profileimg)
  //         )
  //     }
  //     userModel.delete(user.id);
  //     if (req.session.userLogged.id == user.id) {
  //         res.locals.isLogged = false;
  //     }
  //     else {
  //         req.cookies.userEmail = res.cookie('userEmail', req.session.userLogged.email, { maxAge: (1000 * 60) * 60 })
  //     }
  //     return res.redirect('/users/usersList')
  // },

  // userList: (req, res) => {
  //     const users = userModel.all();
  //     res.render('users/usersList', { users })
  // },

  // cart: (req, res) => {
  //     const carrito = productModel.carrito()
  //     res.render('users/productCart', { carrito, toThousand })
  // },

  // addCart: (req, res) => {
  //     res.redirect('/users/productCart')
  // },

  // Formulario de registro
  // register: (req, res) => {
  //     res.render('users/register', {});
  // },

  // Proceso de creacion de un nuevo usuario
  // newUser: (req, res) => {
  //     let user = req.body;
  //     let errors = validationResult(req);
  //     if (errors.isEmpty()) {
  //         if (userModel.findByField('email', req.body.email)) {
  //             if (req.file) {
  //                 fs.unlinkSync(
  //                     path.resolve(__dirname, '../../public/images/users/' + req.file.filename)
  //                 )
  //             }
  //             let errors = {
  //                 email: {
  //                     msg: 'Email existente'
  //                 }
  //             }
  //             delete req.body.password;
  //             res.render('users/register', { errors, old: req.body });
  //         } else {
  //             user.profileimg = req.file ? req.file.filename : 'default-user.png';
  //             delete user["passwordConfirm"];
  //             user.password = bcrypt.hashSync(user.password, 10);
  //             userModel.create(user);
  //             res.redirect('/users/login/');
  //         }
  //     } else {
  //         if (req.file) {
  //             fs.unlinkSync(
  //                 path.resolve(__dirname, '../../public/images/users/' + req.file.filename)
  //             )
  //         }
  //         delete req.body.password;
  //         res.render('users/register', { errors: errors.mapped(), old: req.body });
  //     };
  // }

  profile: (req, res) => {
    return res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  login: (req, res) => {
    res.render("users/login", {});
  },
  loginProcess: (req, res) => {
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
          return res.render("users/login"
            // , {
            //   errors: {
            //     email: {
            //       msg: "Las credenciales no son válidas",
            //     },
            //   },
            // }
          );
        }

        return res.render("users/login", {
          errors: {
            email: {
              msg: "Este email no se encuentra en nuestra base de datos",
            },
          },
        });
      })
      .catch((error) => {
        res.send("Error interno del servidor");
      });
  },

  logout: (req, res) => {
    req.session.destroy();
    res.clearCookie("userEmail");
    return res.redirect("/users/login");
  },

  // Proceso de eliminacion de un usuario
  userDestroy: function (req, res) {
    console.log(req.params.id);
    Usuario.findByPk(req.params.id)
      .then((user) => {
        console.log('usuario: ', user);
        if (user.profileImg != "default-user.png") {
          fs.unlinkSync(
            path.resolve(
              __dirname,
              "../../public/images/users/" + user.profileImg
            )
          );
        }
        return Usuario.destroy({ where: { id_user: user.id_user } });
      })
      .then((e) => {
        console.log('response: ', e);
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
      .catch((error) => {
        res.send(error);
      });
  },

  userList: (req, res) => {
    Usuario.findAll().then((usuarios) => {
      res.render("users/usersList", { usuarios });
    });
  },

  cart: (req, res) => {
    // const carrito = productModel.carrito();
    res.render("users/productCart", { carrito, toThousand });
  },

  addCart: (req, res) => {
    res.redirect("/users/productCart");
  },

  // Formulario de registro
  register: (req, res) => {
    res.render("users/register", {});
  },

  // HACER EL UPDATE 

  update: async (req, res) => {
    try {
      let usuario = await Usuario.findByPk(req.params.id)
      await Usuario.update(
        {
          firstName: req.body.firstName || usuario.firstName,
          lastName: req.body.lastName || usuario.lastName,
          email: req.body.email || usuario.email,
          profileImg: req.body.profileImg  || usuario.profileImg,
          // profileImg: req.file == undefined ? usuario.profileImg : req.file.filename
          password: bcrypt.hashSync(req.body.password, 10)  || usuario.password
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
            user.profileimg = req.file ? req.file.filename : "default-user.png";
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
          console.log(error);
          res.status(500).send("Hubo un error en el servidor");
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
};

module.exports = controlador;
