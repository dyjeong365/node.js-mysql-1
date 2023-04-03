// 버전관리용
// .gitignore
// lib/db.js

var mysql = require("mysql");
var db = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database: "",
});
db.connect();
module.exports = db;
