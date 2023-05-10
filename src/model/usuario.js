module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";

    let cols = {
      id_users: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profileImg: {
        type: DataTypes.STRING,
        allowNull: false
      },
    };

    let config = { tableName: "usuarios", timestamps: false};
    return (Usuario = sequelize.define(alias, cols, config));
  };