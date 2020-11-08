const config = require('../../config');

module.exports = (message) => {
  if (!message.content.startsWith(config.commands.prefix)) {
    return;
  }

  const args = message.content.slice(1).split(/\s+/);
  const command = args.shift();

  if (command === 'help') {
    message.channel.send('help message');
  }
};
