module.exports = (sequelize, DataTypes) => {
    let alias = "Categoria";

    let cols = {
      id_categoria: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoria: {
        type: DataTypes.STRING,
      }

    };

    let config = { tableName: "categorias", timestamps: false};
    return (Categoria = sequelize.define(alias, cols, config));
  };