const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "jachwi.cqedpgadqcf0.ap-northeast-2.rds.amazonaws.com",
  port: "3306",
  user: "root",
  password: "wkcnl123",
  database: "jachwi",
});

conn.connect((err) => {
  if (err) console.log(err);
  else console.log("데이터베이스 연결");
});

module.exports = conn;
