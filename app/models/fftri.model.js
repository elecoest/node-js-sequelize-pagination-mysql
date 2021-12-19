/**
 * @swagger
 * components:
 *   schemas:
 *     Fftri:
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
 *           description : The start date of the fftri 
 *         discipline:
 *           type: string
 *         distance:
 *           type: string
 *         format:
 *           type: string
 *         league:
 *           type: string
 *         place: 
 *           type: string
 *         city: 
 *           type: string
 *         zip: 
 *           type: string
 *         lat: 
 *           type: string
 *         lng: 
 *           type: string
 *         country: 
 *           type: string
 */
const moment = require('moment'); // require

module.exports = function (sequelize, DataTypes) {
  const Fftri = sequelize.define('fftri', {
/*    id_event: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_event'
    },*/
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: 'id_trial'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'name'
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_trial'
    },
    discipline: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'discipline'
    },
    distance: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'distance'
    },
    format: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'format'
    },
    league: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'league'
    },
/*    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'url'
    },*/
/*    date_start_event: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_start_event'
    },*/
/*    date_end_event: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'date_end_event'
    },*/

    place: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'place'
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'city'
    },
    zip: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'zip'
    },
    lat: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'lat'
    },
    lng: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'lng'
    },
 /*    country: {
     type: DataTypes.STRING(255),
      allowNull: false,
      field: 'county'
    },

    organizator_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'organizator_name'
    },
    contact_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_name'
    },
    contact_phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_phone'
    },
    contact_email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_email'
    },
    contact_address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_address'
    },
    contact_city: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_city'
    },
    contact_zip: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'contact_zip'
    },
    label_event: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'label_event'
    },
    label_trial: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'label_trial'
    },*/
/*    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1,
      field: 'state'
    },
    modified_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'modified_date'
    },
    discipline_fftri: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'discipline_fftri'
    },
    distance_fftri: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'distance_fftri'
    },
    format_fftri: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'format_fftri'
    },
    labels_fftri: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'labels_fftri'
    },
    labels_fftri_trial: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'labels_fftri_trial'
    }*/
  }, {
    timestamps: false,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: 'zfv71_t2rank_trials_fftri',
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
  return Fftri;
};
