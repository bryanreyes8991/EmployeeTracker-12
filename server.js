const connection = require('./config/connection');
const cms = require('./utils/utility');


connection.mysql();
cms.startCms();