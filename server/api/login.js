var express = require('express');
var router = express.Router();

var ctrlAccount = require('./controllers/account');

/* GET users listing. */
router.get('/api/getAllAccounts', ctrlAccount.GetAllAccounts);

module.exports = router;