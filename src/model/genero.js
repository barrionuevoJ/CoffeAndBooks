module.exports = (sequelize, DataTypes) => {
    let alias = "Genero";

    let cols = {
      id_genero: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false,
      }

    };

    let config = { tableName: "generos", timestamps: false};
    return (Genero = sequelize.define(alias, cols, config));
  };