const express = require('express');

const employeeRoutes = require('./employeeRoutes');
const roleRoutes = require('./roleRoutes');

const app = express();

app.use('/employees', employeeRoutes);
app.use('/departments', departmentRoutes);
app.use('/roles', roleRoutes);

module.exports = app;