const router = require('express').Router();
const db = require('../config/connection').mysql();

viewRoles() = router.get('/', (req, res) => {
    const sql = `SELECT roles.id, roles.title, departments.name AS department, roles.salary
    FROM roles
    JOIN departments
     ON roles.department_id = departments.id;`;
     db.query(sql, (err, roles) => {
        if (err) {
        return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(roles);
     });
});

addRole () = router.post('/', ({ body }, res) => {
    if (!body || !body.role.id) {
        return res.status(500).json({ message: 'error', error: err.message });
    }
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`;
    db.query(sql, { body }, (err, role) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message});
        }
        console.table(role)
    });
});

updateEmpRole () = router.put('/', ({ body }, res) => {
    if (!body || !body.employee.id) {
        return res.status(500).json({ message: 'error', err: error.message });
    }
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?;`;
    db.query(sql, { body }, (err, newRole) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(newRole)
    });
});

module.exports = viewRoles(), addRole(), updateEmpRole();