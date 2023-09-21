const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      max: 5,
      min: 0,
      validate: {
        max: {
          msg: "Review cannot exceed 5 stars",
        },
      },
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "movie",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
