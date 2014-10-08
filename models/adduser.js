/*global require, module, console*/
var escape = require('pg-escape');
var config = require('./postgresConfig');
var conString = config.conString;
var pg = config.pg;

function user() {
  "use strict";
}

user.addUser = function (userID, username, callback) {
  "use strict";
  pg.connect(conString, function (err, client, done) {
    var queryStr = "INSERT INTO user1(\"userID\", \"username\") VALUES ('" + userID + "','" + username + "')";
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