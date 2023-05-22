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
  let config = { tableName: "generos", timestamps: false };

  const Genero = sequelize.define(alias, cols, config);

  Genero.associate = models => {
    Genero.hasMany(models.Producto, {
      as: "productos",
      foreignKey: "id_genero"
    })
  }
  return Genero
};