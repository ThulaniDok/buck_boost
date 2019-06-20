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

var plyr = {
    name: 'Tom',
    surname: 'Brady',
    position: 'Quarter',
    age: '38'
};

var query = con.query('insert into TeamSquad set ?', plyr, function (err, result) {
    if (err) {
        console.error(err)
        return;
    }
    console.log(query)
    console.log("created successfully")
});