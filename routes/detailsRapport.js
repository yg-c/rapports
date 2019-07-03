var express = require('express');
var router = express.Router();
var models = require('../models');
var fs = require('fs');

/* GET home page. */
router.get('/', async function(req, res, next) {

  let id = req.query.idRapport;
  let rapport = await models.rapport.findByPk(id);
  let restaurant = await models.restaurant.findByPk(rapport.idRestaurant);

  rapport.caTotal = parseFloat(rapport.caNourriture) + parseFloat(rapport.caBoissons);

  fs.appendFileSync('C:\\Users\\Yann\\Desktop\\'+restaurant.name+rapport.dateRapport+'.csv', restaurant.name + '\n' + rapport.dateRapport , function (err) {
    if (err) throw err;
    console.log("The file was saved!");
  });

  res.render('detailsRapport', { title: 'Rapport', rapport:rapport, restaurant:restaurant, user:req.session});

});

router.post('/',  function (req, res) {



})

module.exports = router;
