const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "Please enter a Username",
        },
        unique: {
          msg: "Username already taken!",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
      validate: {
        notNull: {
          msg: "Please enter an email",
        },
        unique: {
          msg: "This email already has a registered account",
        },
        isEmail: {
          msg: "Please enter a valid email",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      min: 8,
      validate: {
        notNull: {
          msg: "Please enter a password",
        },
        min: {
          msg: "password must be at least 8 characters long",
        },
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
