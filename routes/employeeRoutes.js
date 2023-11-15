const router = require('express').Router();
const db = require('../config/connection').mysql();

viewAllEmps () = router.get('/', (req, res) => {
    const sql = `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary AS salary, department.name AS department,
    manager.first_name AS manager FROM employee 
    LEFT JOIN employee manager ON  manager.id = employee.manager_id
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    ORDER BY employee.id;`;
      db.query(sql, (err, employees) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: message });
        }
        console.table(employees);
      });
});

addEmp () = router.post('/', ({ body }, res) => {
    if(!body || !body.employee.id) {
        return res.status(500).json({ message: 'error', error: err.message });
    }
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`;
    db.query(sql, { body }, (err, employee) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message});
        }
        console.table(employee)
    });
});

module.exports = viewAllEmps() , addEmp();