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
  let config = { tableName: "autores", timestamps: false };
  const Autor = sequelize.define(alias, cols, config)

  Autor.associate = models => {
    Autor.hasMany(models.Autor, {
      as: "productos",
      foreignKey: "id_autor"
    })
  }

  return Autor;
};