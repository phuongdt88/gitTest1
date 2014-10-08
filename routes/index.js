var express = require('express');
var router = express.Router();
var user = require('../models/test1');
var adduser = require('../models/adduser');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/list', function (req, res) {
  "use strict";
  user.getUserList(function (result) {
    res.render('user', {
      title: 'Phuong',
      userdata: result
    });
  });
});

router.get('/adduser', function(req, res){
    res.render('adduser', {title: 'Add a new user'});
});

router.post('/process', function(req, res){
    "use strict";
    var userID = req.body.userID;
    var username = req.body.username;
    adduser.addUser(userID, username, function(result){
            res.redirect("list"); 
    });
});

module.exports = router;
