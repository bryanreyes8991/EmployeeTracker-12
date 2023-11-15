const connection = require('./config/connection');
const cms = require('./utils/utility');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection.mysql();
cms.startCms();

const routes = require('./routes');
app.use('/api', routes)

app.use('*', (req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  