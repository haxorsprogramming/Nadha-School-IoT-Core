const path = require('path');
const express = require('express');
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
//use mysql database
const mysql = require('mysql');
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3ncoding4sc11A@',
  database: 'dbs_haxors'
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('Koneksi berhasil...');
});
//endpoint home
app.get('/', function(req, res){
  res.send("RESTFull Server Haxors programming club. Develop in Node JS");
});

app.get('/absen', function(req, res){
  var data = {
    'nama' : 'aditya'
  }
  res.send("read");
});

app.get('/ubah-data', function(req, res){
  var sql = "UPDATE tbl_command SET command = 'simpan' WHERE id = '1';";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Data di update ..");
    console.log("Data di update..");
  });
});

app.post('/simpan-kartu', function(req, res){
  let kdKartu = req.body.kdKartu;
  let dataSend = {'kdKartu':kdKartu}
  res.json(dataSend);
});

// server dengan port 3561
app.listen(3561, () => {
  console.log('Server sedang berjalan ... di port 3561 ');
});