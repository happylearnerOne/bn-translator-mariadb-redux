var express = require('express');
var router = express.Router();

var ctrlTranslator = require('./controllers/translator');

/* GET users listing. */
router.post('/api/addTranslator', ctrlTranslator.AddTranslator);
router.get('/api/getTranslators', ctrlTranslator.GetTranslators);

module.exports = router;