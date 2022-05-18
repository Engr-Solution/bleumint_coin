const userModel = require('./user.model');
const userService = require('./user.service');

module.exports = userService(userModel);
