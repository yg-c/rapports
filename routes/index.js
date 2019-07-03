var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', async function(req, res, next) {

  let rapports = await models.rapport.findAll();

  res.render('index', { title: 'Accueil', user:req.session, rapports:rapports});

});

module.exports = router;
