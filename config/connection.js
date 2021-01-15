require('dotenv').config();

const hostname = process.env.HOST;
const database = process.env.DATABASE;
const dbport = process.env.PORT;
const dbuser = process.env.USER;
const dbpass = process.env.PASS;


var mysql = require("mysql");

var connection = mysql.createConnection({
  host: hostname,
  port: dbport,
  user: dbuser,
  password: dbpass,
  database: database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
