var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', async function(req, res, next) {

  let restaurants = await models.restaurant.findAll();

  res.render('addRapport', { title: 'Rapport',restaurants:restaurants, user:req.session});
});

/* POST personForm page. */
router.post('/',  function (req, res) {


  models.rapport.create({

    dateRapport: req.body.dateRapport,
    caBoissons: req.body.caBoissons,
    caNourriture: req.body.caNourriture,
    facture77: req.body.facture77,
    facture25: req.body.facture25,
    bons: req.body.bons,
    chf: req.body.chf,
    eur: req.body.eur,
    reka: req.body.reka,
    idRestaurant:req.body.restaurant,
  });

  res.render('index', {title: 'Accueil', user:req.session});        //Page title

});

module.exports = router;
