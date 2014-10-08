/*jslint node: true */
var express = require('express');
var router = express.Router();
var user = require('../models/test1');

router.get('/list', function (req, res) {
  "use strict";
  card.getUserList(function (result) {
    res.render('user', {
      title: 'Phuong',
      userdata: result,
    });
  });
});