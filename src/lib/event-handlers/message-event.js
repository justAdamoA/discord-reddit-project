const config = require('../../config');
const { execute } = require('../commands');

module.exports = (message) => {
  if (!message.content.startsWith(config.commands.prefix)) {
    return;
  }

  const args = message.content.slice(1).split(/\s+/);
  const command = args.shift();

  execute(command, args, message);
};
