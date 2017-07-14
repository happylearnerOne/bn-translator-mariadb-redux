var express = require('express');
var mariadb = require('../lib/mariadb.js');

module.exports.AddTranslator = function (req, res) {
	// console.log("get accounts:", req);
	// console.log("body=", req.body);

	var sql = 'INSERT INTO translator SET ?';   

	//var mapArray=[req.body.emailControl,req.body.passwordControl];
  	
	var mapArray = {
		name: req.body.name,
		skype: req.body.skype,
		cntry_code: req.body.cntry_code,
		phone_no: req.body.phone_no,
		ctc_cntry_code: req.body.ctc_cntry_code,
		ctc_phone_no: req.body.ctc_phone_no,
		email: req.body.email,
		address: req.body.address,
		native_lang: req.body.native_lang,
		trgt_lang_from: req.body.trgt_lang_from,
		trgt_lang_to: req.body.trgt_lang_to,
		direction: req.body.direction,
		education: req.body.education,
		year_exp: req.body.year_exp,
		prof_field: req.body.prof_field,
		certificate: req.body.certificate,
		ref_work: req.body.ref_works,
		result: req.body.tt_result,
		comment: req.body.comments
	};
	mariadb.getConnection(function(error, connection) {
		if (error) {
			console.log('AddTranslator getConnection Err: ' + error.message);           
			res.status(500).send(error.message);
			return error;
		}
		connection.query(sql, mapArray, function(error, result) {
			if (error) {
				console.log('AddTranslator query Err: ' + error.message);
				connection.release(
					function(error) {
						if (error) {
							console.log('AddTranslator query Err: ' + error.message);
						}
					}
				);
				res.status(500).send(error.message);
				return error;
			}
			connection.release(
				function(error) {
					if (error) {
						console.log('AddTranslator release Err: ' + error.message);
					}
				}
			);
			res.status(200).send(result);
		});
	});
}


module.exports.GetTranslators = function (req, res) {
	// console.log("get accounts:", req);
	// console.log("body=", req.body);

	var sql = 'SELECT * FROM translator';   

	//var mapArray=[req.body.emailControl,req.body.passwordControl];
  	
	var mapArray = {
		
	};
	mariadb.getConnection(function(error, connection) {
		if (error) {
			console.log('GetTranslators getConnection Err: ' + error.message);           
			res.status(500).send(error.message);
			return error;
		}
		connection.query(sql, mapArray, function(error, result) {
			if (error) {
				console.log('GetTranslators query Err: ' + error.message);
				connection.release(
					function(error) {
						if (error) {
							console.log('GetTranslators query Err: ' + error.message);
						}
					}
				);
				res.status(500).send(error.message);
				return error;
			}
			connection.release(
				function(error) {
					if (error) {
						console.log('GetTranslators release Err: ' + error.message);
					}
				}
			);
			res.status(200).send(result);
		});
	});
}
