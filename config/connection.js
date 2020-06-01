
// MySQL connection.
var mysql = require("mysql2");

var connection;

  connection = mysql.createConnection({
    host: "icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "ol5v2cx6tbhnkj8p",
    password: "hwom8xrs214f5vus",
    database: "gw2engge3hpmkwhb"
  });

// Throw an error if 
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM 
module.exports = connection; 