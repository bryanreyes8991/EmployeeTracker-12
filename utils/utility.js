const inquirer = require('inquirer');
const deptRout = require('../routes/departmentRoutes');
const empRout = require('../routes/employeeRoutes');
const roleRout = require('../routes/roleRoutes');

const trackerInterface = {
    type: 'list',
    name: 'menu',
    message: 'What would you like to do?',
    choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update Employee Role',
        'Quit'
    ]
};

const startCms = () => {
    inquirer.prompt(trackerInterface)
    .then((answer) => {
        switch(answer.choice) {
            case 'View All Departments':
            deptRout.viewAllDpts();
            break;
            case 'View All Roles':
            roleRout.viewRoles();
            break;
            case 'View All Employees':
            empRout.viewAllEmps();
            break;
            case 'Add a Department':
            deptRout.addDpt();
            break;
            case 'Add a Role':
            roleRout.addRole();
            break;
            case 'Add an Employee':
            empRout.addEmp();
            break;
            case 'Update Employee Role':
            roleRout.updateEmpRole();
            break;
            case 'Quit':
            process.exit();
        };
    });
};

module.exports = startCms();