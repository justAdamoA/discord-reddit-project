const executables = require('./executables');

module.exports = (command, args, message) => {
  if (executables.hasOwnProperty(command) === true) {
    return executables[command](args, message);
  }
};
