/**
 * @swagger
 * components:
 *   schemas:
 *     Content:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         state: 
 *           type: boolean
 *         catid:
 *           type: integer
 *           description: Catégorie ID
 *         title:
 *           type: string
 *           description: The title of the item.
 *         introtext:
 *           type: string
 *           description: The introtext of the item.
 *         fulltext:
 *           type: string
 *           description: The fulltext of the item.
 *         image_intro:
 *           type: string
 *           description: 
 */

module.exports = function (sequelize, Sequelize) {
  const Content = sequelize.define('content', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    state: {
      type: Sequelize.BOOLEAN
    },
    catid: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    introtext: {
      type: Sequelize.STRING
    },
    fulltext: {
      type: Sequelize.STRING
    },
    image_intro: {
      type: Sequelize.STRING,
      field: 'images'
    }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: 'zfv71_content',
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      }
    ]
  });
  return Content;
};
