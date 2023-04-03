var mysql = require("mysql");
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "111111",
  database: "opentutorials",
});

connection.connect();

connection.query("SELECT * FROM topic", function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();

// mysql 5.7이전 버전과 이후 버전의 테이블 구조 변경으로 발생된 문제

// solution
// ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '변경할비밀번호';