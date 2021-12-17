/**
 * @swagger
 * components:
 *   schemas:
 *     Trial:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         state: 
 *           type: boolean
 *         name:
 *           type: string
 *         startDate:
 *           type: date
 *         image:
 *           type: string
 *         format:
 *           type: string
 *         league:
 *           type: string
 *         status:
 *           type: string
 *         event_id:
 *           type: string
 *         discipline_fftri:
 *           type: string
 *         format_fftri:
 *           type: string
 *         distance_fftri:
 *           type: string
 *         labels_fftri:
 *           type: string
 *         editions : 
 *           type: array
 *           items:
 *              $ref: '#/components/schemas/Edition'
 *         event:
 *           $ref: '#/components/schemas/Event'
 */

module.exports = function (sequelize, Sequelize) {
  const Trial = sequelize.define('trial', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    // alias: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // ordering: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    state: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    // checked_out: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // checked_out_time: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // },
    // created_by: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // modified_by: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'category_name'
    },
    // event_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // canonicalurl: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // listcanonicalurl: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // category_type: {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false
    // },
    // njuko_authorization: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // njuko_edition: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // njuko_competition: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // njuko_refresh: {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false
    // },
    // njuko_created: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // },
    // njuko_isprod: {
    //   type: Sequelize.BOOLEAN,
    //   allowNull: false
    // },
    // njuko_name: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // njuko_competitionname: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // njuko_participantLimit: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    startDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      field: 'event_date'
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'event_banniere'
    },
    format: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'event_format'
    },
    league: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'event_ligue'
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'event_cancelled'
    },
    // njuko_registrationurl: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // event_titre: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // event_canonical: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // event_hits: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // event_hits_2020: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // event_hits_2021: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // event_hits_2022: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // event_hits_2023: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // event_hits_2024: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    event_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'epreuve_id'
    },
    // drafting: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // event_place_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    discipline_fftri: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'discipline_fftri'
    },
    format_fftri: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'format_fftri'
    },
    distance_fftri: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'distance_fftri'
    },
    labels_fftri: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'labels_fftri'
    },
    // place_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // rgt_event_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // rgt_description: {
    //   type: Sequelize.TEXT,
    //   allowNull: false
    // },
    // rgt_event_distance: {
    //   type: Sequelize.DECIMAL,
    //   allowNull: false
    // },
    // rgt_event_elevation: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // rgt_event_laps: {
    //   type: Sequelize.SMALLINT,
    //   allowNull: false
    // },
    // rgt_event_register_link: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // rgt_event_gpx_file: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // rgt_event_date: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // },
    // rgt_reco_id: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // rgt_reco_register_link: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // },
    // rgt_reco_date: {
    //   type: Sequelize.DATE,
    //   allowNull: false
    // },
    // fftri_id_trial: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // },
    // epr_filter: {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // }
  }, {
    timestamps: false,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
    tableName: 'zfv71_t2rank_epreuve',
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
  return Trial;
};
