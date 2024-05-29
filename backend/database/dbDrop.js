var mysql = require('mysql2');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "fatec",
});

con.connect(function(err) {
	if (err) throw err;
	console.log("Conectado");
	
	var sql = "DROP DATABASE so2";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log("Database so2 deletada");
		
		con.end();
	});	
});
