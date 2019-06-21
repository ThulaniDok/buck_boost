const express = require('express');
const app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require("path");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// database connection details
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "buck_boost"
  });

  // connect to database
con.connect(function(err) {
    if (err) {
        throw err
    }
    console.log("DB Connected!")
});

// App home page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html') 
});

// View team squad
app.get('/team', function (req, res) {
    con.query('SELECT * FROM TeamSquad', function (err, rows, fields) {
        if(!err) {
            res.send(rows)
        }
        console.log(err)
    })
});

// View specific player details
app.get('/team/:player', function (req, res) {
    con.query('SELECT * FROM TeamSquad WHERE name = ?', [req.params.player], function (err, rows, fields) {
        if(!err) {
            res.send(rows)
        }
        console.log(err)
    })
});

// Delete player from team squad
app.delete('/team/:player', function (req, res) {
    con.query('DELETE FROM TeamSquad WHERE name = ?', [req.params.player], function (err, rows, fields) {
        if(!err) {
            res.send('Deleted successfully!')
        }
        console.log(err)
    });
});

//Update existing player
app.put('/team', function (req, res) {
    let plyr_name = req.body.name;
    let plyr_surname = req.body.surname;
    let plyr_pos = req.body.position;
    let plyr_age = req.body.age;
    
    if (!plyr_name) {
        console.log(plyr_pos)
        return res.status(400).send({error: plyr, message: "please provide player and player name"});
    }
    con.query('UPDATE `TeamSquad` SET `surname`=?,`position`=?,`age`=? where `name`=?', [plyr_surname, plyr_pos, plyr_age, plyr_name ], function (err, results, fields){
        if(err) throw err;
        return res.send({err: false, data: results, message: "Player has been updated."})
    });
});

/*//rest api to update record into mysql database
app.put('/team', function (req, res) {
    con.query('UPDATE `TeamSquad` SET `age`=?,`surname`=?,`position`=? where `name`=?', [req.body.age, req.body.surname, req.body.position, req.body.name], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });*/

// Add new player to team squad
app.post('/team', function (req, res) {
    let plyr = req.body.plyr;
    if (!plyr) {
        return res.status(400).send({ error:true, message: 'Please provide player' });
    }
    console.log(plyr);
    con.query('insert into TeamSquad set ?', plyr, function (err, result) {
        if(!err) {
            res.send('Created successfully!')
        }
        console.log(err)
    })
});


//port to listen to
app.listen(3000);