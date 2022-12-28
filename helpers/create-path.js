const path = require('path');

const createPath = (page) => path.join(__dirname, '../layout', `${page}.ejs`);

module.exports = createPath;
