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
    
    const Categoria = sequelize.define(alias, cols, config)

    Categoria.associate = models => {
      Categoria.hasMany(models.Producto, {
        as: "productos",
        foreignKey: "id_categoria"
      })
    }
    
    return Categoria;
  };