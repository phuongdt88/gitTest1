/*global require, module, console*/
var escape = require('pg-escape');
var config = require('./postgresConfig');
var conString = config.conString;
var pg = config.pg;

function user() {
  "use strict";
}

user.getUserList = function (callback) {
  "use strict";
  pg.connect(conString, function (err, client, done) {
    var queryStr = 'SELECT * FROM user1';
    console.log(queryStr);
    client.query(queryStr, function (err, result) {
      done();
      callback(result.rows);
    });
    if (err) {
      return console.error('error running query', err);
    }
  });
};
module.exports = user;