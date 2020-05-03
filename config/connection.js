
// MySQL connection.
var mysql = require("mysql2");

var connection;

  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "passwordisroot",
    database: "burger_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM 
module.exports = connection;