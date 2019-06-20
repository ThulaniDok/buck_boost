var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "buck_boost"
  });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!")
});

var player = {
    name: 'Ina',
    surname: 'Busakwe',
    position: 'Right Mid',
    age: '31'
}

var query = con.query('insert into TeamSquad ?', player, function (err, result){
    console.log(query.sql)
})

con.query('select * from TeamSquad', function(err,result) {
    console.log(result)
}); 