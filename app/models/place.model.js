const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const Place = sequelize.define('Place',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      state: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
        field: 'published'
      },
      // asset_id: {
      //   type: DataTypes.INTEGER.UNSIGNED,
      //   allowNull: false,
      //   defaultValue: 0
      // },
      name: {
        type: DataTypes.STRING(200),
        allowNull: true,
        field: 'titre'
      },
      // alias: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true
      // },
      // couleur: {
      //   type: DataTypes.CHAR(7),
      //   allowNull: true
      // },
      // couleur_texte: {
      //   type: DataTypes.CHAR(7),
      //   allowNull: true
      // },
      // description: {
      //   type: DataTypes.TEXT,
      //   allowNull: true
      // },
      // intro: {
      //   type: DataTypes.TEXT,
      //   allowNull: true
      // },
      // map_id: {
      //   type: DataTypes.INTEGER.UNSIGNED,
      //   allowNull: true
      // },
      // map_url: {
      //   type: DataTypes.STRING(600),
      //   allowNull: true
      // },
      streetAddress: {
        type: DataTypes.STRING(80),
        allowNull: true,
        field: 'rue'
      },
      // numStreetAddress: {
      //   type: DataTypes.STRING(10),
      //   allowNull: true,
      //   field: 'numero'
      // },
      addressLocality: {
        type: DataTypes.STRING(40),
        allowNull: true,
        field: 'ville'
      },
      postalCode: {
        type: DataTypes.STRING(10),
        allowNull: true,
        field: 'codepostal'
      },
      addressCountry: {
        type: DataTypes.STRING(11),
        allowNull: true,
        defaultValue: "FR",
        field: 'pays'
      },
      // access: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      //   defaultValue: 0
      // },
      // deleted: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      //   defaultValue: 0
      // },
      // default: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      //   defaultValue: 0
      // },
      // image_bullet: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true
      // },
      // vignette: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true
      // },
      // ordering: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   defaultValue: 0
      // },
      // agenda_id: {
      //   type: DataTypes.INTEGER.UNSIGNED,
      //   allowNull: true,
      //   defaultValue: 0
      // },
      // created_date: {
      //   type: DataTypes.DATEONLY,
      //   allowNull: false
      // },
      // proposed_by: {
      //   type: DataTypes.INTEGER.UNSIGNED,
      //   allowNull: true
      // },
      // lastmod: {
      //   type: DataTypes.DATE,
      //   allowNull: true
      // },
      // lastmod_by: {
      //   type: DataTypes.INTEGER.UNSIGNED,
      //   allowNull: true
      // },
      // showmap: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      //   defaultValue: 1
      // },
      // zoom: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      //   defaultValue: 14
      // },
      // kmlfile: {
      //   type: DataTypes.STRING(255),
      //   allowNull: true
      // },
      latitude: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'latitude'
      },
      longitude: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: 'longitude'
      },
      // maptype: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      //   defaultValue: 0
      // },
      // phone: {
      //   type: DataTypes.STRING(30),
      //   allowNull: true
      // },
      // fax: {
      //   type: DataTypes.STRING(30),
      //   allowNull: true
      // },
      // email: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true
      // },
      // website: {
      //   type: DataTypes.STRING(200),
      //   allowNull: true
      // },
      // adminLock: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: true,
      //   defaultValue: 0
      // },
      // version: {
      //   type: DataTypes.INTEGER.UNSIGNED,
      //   allowNull: false,
      //   defaultValue: 0
      // },
      // hits: {
      //   type: DataTypes.INTEGER.UNSIGNED,
      //   allowNull: false,
      //   defaultValue: 0
      // },
      // metakey: {
      //   type: DataTypes.TEXT,
      //   allowNull: true
      // },
      // metadesc: {
      //   type: DataTypes.TEXT,
      //   allowNull: true
      // },
      // metarobots: {
      //   type: DataTypes.STRING(200),
      //   allowNull: true,
      //   defaultValue: "index, follow"
      // },
      // checked_out: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      // checked_out_time: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   defaultValue: "0000-00-00 00:00:00"
      // },
      // created_by: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      // country: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true,
      //   field: 'country'
      // },
      // contact: {
      //   type: DataTypes.STRING(100),
      //   allowNull: true
      // },
      // address: {
      //   type: DataTypes.STRING(600),
      //   allowNull: true,
      //   field: 'address'
      // },
      // front: {
      //   type: DataTypes.BOOLEAN,
      //   allowNull: false,
      //   defaultValue: 0
      // },
      // language: {
      //   type: DataTypes.STRING(10),
      //   allowNull: false,
      //   defaultValue: "*"
      // },
      // note: {
      //   type: DataTypes.STRING(255),
      //   allowNull: true
      // },
      // codeinsee: {
      //   type: DataTypes.STRING(3),
      //   allowNull: false
      // }
    }, {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'zfv71_t2rank_places',
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

  return Place;
};
