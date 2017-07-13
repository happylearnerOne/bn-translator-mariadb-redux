var mysql = require('mysql');
var pool=mysql.createPool({    
    host: 'thzz882efnak0xod.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'a30r1w8w1zzjklzs',
    password: 'ysfd6hhsv564wk72',
    database: 'p0uxhcx139xrqqt5'      
});

pool.on('connection', function(connection) {
    console.log('Connected to My Mariadb: BN');
});

pool.on('enqueue', function () {
    console.log('Waiting for available connection slot');
});

exports.getConnection = function(callback) {
    // The poll doesn't even make a connection to the database 
    // until a pool.getConnection() call, so that would be the 
    // earliest point to know.
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};