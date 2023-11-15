const db = require('../config/connection').mysql();

function viewAllDpts () {
    const sql = `SELECT id, department_name FROM department;`;
    db.query(sql, (err, departments) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(departments);
    });
};

function addDpt (department) {
    const sql = `INSERT INTO department (department_name) VALUES (?)`;
    const params = department;
    db.query(sql, params, (err, department) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(department);
    });
};

module.exports = addDpt() , viewAllDpts();