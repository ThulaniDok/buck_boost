var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "buck_boost"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("DB Connected!")
});

con.query('select * from TeamSquad', function(err, result) {
    console.log(result)
}); 