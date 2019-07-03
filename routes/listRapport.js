var express = require('express');
var router = express.Router();
var models = require('../models');
var mysql = require('mysql');
const fs = require('fs')

/* GET home page. */
router.get('/', async function(req, res, next) {

    let restaurants = await models.restaurant.findAll();
    let rapports = await models.rapport.findAll();

    for (let i = 0; i < rapports.length; i++) {
        for (let j = 0; j < restaurants.length; j++) {
            if (rapports[i].idRestaurant === restaurants[j].idRestaurant) {
                rapports[i].restaurantName = restaurants[j].name;
                rapports[i].caTotal = parseFloat(rapports[i].caBoissons) + parseFloat(rapports[i].caNourriture);
            }
        }
    }

  res.render('listRapport', { title: 'Rapports',rapports:rapports, user:req.session});
});

module.exports = router;
