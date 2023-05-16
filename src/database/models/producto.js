module.exports = (sequelize, DataTypes) => {
  let alias = "Producto";

  let cols = {
    id_producto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    descuento: {
      type: DataTypes.INTEGER,
    },
  };
  let config = { tableName: "productos", timestamps: false };

  const Producto = sequelize.define(alias, cols, config)

  Producto.associate = models => {
    Producto.belongsTo(models.Autor, {
      as: 'autor',
      foreignKey: 'id_autor'
    })
    Producto.belongsTo(models.Categoria, {
      as: 'categoria',
      foreignKey: 'id_categoria'
    })
    Producto.belongsTo(models.Genero, {
      as: 'genero',
      foreignKey: 'id_genero'
    })
  }

  return Producto

};
