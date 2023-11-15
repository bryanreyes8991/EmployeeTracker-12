const db = require('../config/connection').mysql();

function viewRoles() {
    const sql = `SELECT roles.id, roles.title, departments.name AS department, roles.salary
    FROM roles
    JOIN departments
     ON roles.department_id = departments.id;`;
     db.query(sql, (err, roles) => {
        if (err) {
        return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(roles);
     }
     );
};

function addRole (role, salary, department) {
    const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);`;
    const params = [role, salary, department];
    db.query(sql, params, (err, role) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message});
        }
        console.table(role)
    });
};

function updateEmpRole (role, department) {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?;`;
    const params = [role, department]
    db.query(sql, params, (err, newRole) => {
        if (err) {
            return res.status(500).json({ message: 'error', error: err.message });
        }
        console.table(newRole)
    });
};

module.exports = viewRoles(), addRole(), updateEmpRole();