var express = require('express');
var router = express.Router();

var ctrlTranslator = require('./controllers/translator');

/* GET users listing. */
router.post('/api/addTranslator', ctrlTranslator.AddTranslator);
router.get('/api/getTranslators', ctrlTranslator.GetTranslators);
router.post('/api/updateTranslator', ctrlTranslator.UpdateTranslator);
router.post('/api/deleteTranslator', ctrlTranslator.DeleteTranslator);

module.exports = router;