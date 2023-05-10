module.exports = (sequelize, DataTypes) => {
    let alias = "Autor";

    let cols = {
      id_autor: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false,
      }

    };

    let config = { tableName: "autores", timestamps: false};
    return (Autor = sequelize.define(alias, cols, config));
  };