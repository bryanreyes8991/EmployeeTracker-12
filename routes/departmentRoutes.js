const router = require('express').Router();
const db = require('../config/connection').mysql();

viewAllDpts () = router.get('/', (req, res) => {
    const sql = `SELECT id, department_name FROM department`;
    db.query(sql, (err, departments) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(departments);
    });
});

addDpt () = router.post('/', ({ body }, res) => {
    if(!body || !body.department_name) {
        return res.status(500).json({ message: 'error', error: err.message});
    }
    const sql = `INSERT INTO department (department_name) VALUES (?)`;
    const department = [body.deparment_name];
    db.query(sql, params, (err, department) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(department);
    });
});

module.exports = addDpt() , viewAllDpts();