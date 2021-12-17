
var config = {
  development: {
    HOST: "localhost",
    USER: "joomla3",
    PASSWORD: "joomla3",
    DB: "joomla3",
    DBsocketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  production: {
    HOST: "localhost",
    USER: "t2area",
    PASSWORD: "11M@i2013",
    DB: "t2area",
    DBsocketPath: "/var/run/mysqld/mysqld.sock",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};
module.exports = config;
