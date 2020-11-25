const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {};


Post.init(
    {
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
        type: DataTypes.INTEGER,
        // this is the equivalent of SQL's `NOT NULL` option
        allowNull: false,
        // instruct that this is the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
          },
          post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isURL: true
            }
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          }
        },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'post'
        }
);

module.exports = Post;