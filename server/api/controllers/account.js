var express = require('express');
var mariadb = require('../lib/mariadb.js');

module.exports.GetAllAccounts = function (req, res) {
	var sql = 'SELECT * FROM account';   
	mariadb.getConnection(function(error, connection) {
		if (error) {
			console.log('GetAllAccount getConnection Err: ' + error.message);           
			res.status(500).send(error.message);
			return error;
		}
		connection.query(sql, function(error, result) {
			if (error) {
				console.log('GetAllAccount query Err: ' + error.message);
				connection.release(
					function(error) {
						if (error) {
							console.log('GetAllAccount query Err: ' + error.message);
						}
					}
				);
				res.status(500).send(error.message);
				return error;
			}
			connection.release(
				function(error) {
					if (error) {
						console.log('GetAllAccount release Err: ' + error.message);
					}
				}
			);
			res.status(200).send(result);
		});
	});
}