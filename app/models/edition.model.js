/**
 * @swagger
 * components:
 *   schemas:
 *     Edition:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *           description: The name of the item.
 *         startDate: 
 *           type: string
 *           format: date
 *           description : The start date of the edition 
 *         trial_id: 
 *           type: integer
 *         trial:
 *           $ref: '#/components/schemas/Trial'
 *         nb_runners:
 *           type: integer
 *         nb_finishers:
 *           type: integer
*/

const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  const Edition = sequelize.define('edition', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    // ordering: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'state'
    },
    // checked_out: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // checked_out_time: {
    //   type: DataTypes.DATE,
    //   allowNull: false
    // },
    // created_by: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // modified_by: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'course_name'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      get: function () {
        return moment.utc(this.getDataValue('startDate')).format('YYYY-MM-DD');
      },
      field: 'course_date'
    },
    // course_description: {
    //   type: DataTypes.TEXT,
    //   allowNull: false,
    //   comment: "Description de la course"
    // },
    // soc_chrono_fk: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   comment: "Société de chronométrage"
    // },
    trial_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'categorie_fk'
    },
    // alias: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    //   comment: "alias"
    // },
    // canonicalurl: {
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    //   comment: "canonicalurl"
    // },
    // challenge_fk: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // distance_nat: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // distance_velo: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // distance_cap: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // weather: {
    //   type: DataTypes.TEXT,
    //   allowNull: false
    // },
    // hits: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 0
    // },
    nb_runners: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nb_coureurs'
    },
    nb_finishers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nb_classes'
    }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'zfv71_t2rank_edition',
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


  return Edition;
};
