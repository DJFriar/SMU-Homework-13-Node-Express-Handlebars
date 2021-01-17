require('dotenv').config();

const hostname = process.env.DBHOST;
const database = process.env.DATABASE;
const dbport = process.env.DBPORT;
const dbuser = process.env.DBUSER;
const dbpass = process.env.DBPASS;

var mysql = require("mysql");

var connection; 

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: hostname,
    port: dbport,
    user: dbuser,
    password: dbpass,
    database: database
  });
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
