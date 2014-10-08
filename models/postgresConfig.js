/*jslint node: true */
var pg = require('pg');
pg.defaults.poolSize = 20;
var postgresdb = {
  host: "localhost",
  database: "test1",
  user: "postgres",
  port: "5432",
  password: "123456"
};
function PGDB(){
  "use strict";
}
PGDB.conString = "postgres://" + postgresdb.user + ":" + postgresdb.password + "@" + postgresdb.host + ":" + postgresdb.port + "/" + postgresdb.database;
PGDB.pg = pg;

module.exports = PGDB;