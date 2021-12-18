/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         state:
 *           type: boolean
 *         name:
 *           type: string
 *           description: Event name.
 *         website_url: 
 *           type: string
 *           format: uri
 *         facebook_url:
 *           type: string
 *           format: uri
 *         image:
 *           type: string
 *           description: An image of the trial. Relative path of the image.
 *         place_id: 
 *           type: integer
 *         trials : 
 *           type: array
 *           items:
 *              $ref: '#/components/schemas/Trial'
 *         location: 
 *           $ref: '#/components/schemas/Location'
 *           description : The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
 */

const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const Event = sequelize.define('event', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    // ordering: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      field: 'state'
    },
    // checked_out: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    // checked_out_time: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: "0000-00-00 00:00:00"
    // },
    // created_by: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    // modified_by: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'title'
    },
    // alias: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false
    // },
    // organizer: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    website_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'website_url'
    },
    facebook_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'facebook_url'
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'banniere'
    },
    place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'place_id'
    },
    // hits: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // hits_2021: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // hits_2022: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // labels_fftri: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false
    // },
    // fftri_event_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // epr_filter: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false
    // }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'zfv71_t2rank_manifestation',
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

  return Event;
};