var env = process.env.NODE_ENV || 'development';
var dbConfig = require('../config/db.config.js')[env];

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  //operatorsAliases: false,
  dialectOptions: {
    socketPath: dbConfig.DBsocketPath //  Specify the socket file path 
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.events = require("./event.model.js")(sequelize, Sequelize);
db.trials = require("./trial.model.js")(sequelize, Sequelize);
db.editions = require("./edition.model.js")(sequelize, Sequelize);
db.places = require("./place.model.js")(sequelize, Sequelize);

db.roles = require("../models/role.model.js")(sequelize, Sequelize);
db.users = require("../models/user.model.js")(sequelize, Sequelize);
db.refreshToken = require("../models/refreshToken.model.js")(sequelize, Sequelize);

db.roles.belongsToMany(db.users, { through: "zfv71_fftri_user_roles", foreignKey: "roleId", otherKey: "userId" });
db.users.belongsToMany(db.roles, { through: "zfv71_fftri_user_roles", foreignKey: "userId", otherKey: "roleId" });

db.refreshToken.belongsTo(db.users, {foreignKey: 'userId', targetKey: 'username'});
db.users.hasOne(db.refreshToken, { foreignKey: 'userId', targetKey: 'username'});

db.ROLES = ["user", "admin", "moderator"];

db.events.hasMany(db.trials, { as: "trials", foreignKey: 'event_id', sourceKey: 'id' });
db.trials.hasMany(db.editions, { as: "editions", foreignKey: 'trial_id', sourceKey: 'id' });
db.places.hasMany(db.events, { as: "events", foreignKey: 'place_id', sourceKey: 'id' });

db.trials.belongsTo(db.events, { foreignKey: 'event_id', as: "event" })
db.editions.belongsTo(db.trials, { foreignKey: 'trial_id', as: "trial" })
db.events.belongsTo(db.places, { foreignKey: 'place_id', as: "location" })

module.exports = db;
