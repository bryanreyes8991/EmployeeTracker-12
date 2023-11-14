const mysql = require('mysql2');

let db = null;

module.exports = {
  mysql: () => {
    if (!db) {
      db = mysql.createConnection(
        {
          host: '127.0.0.1',
          user: 'root',
          password: process.env.DB_PASSWORD,
          database: 'employee_tracker_db'
        },
        console.log(`Connected to the employee_tracker_db database.`)
      );
    }
  
    return db;
  }
};
