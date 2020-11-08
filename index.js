require('dotenv').config();
const { Client } = require('discord.js');

const config = {
  discord: {
    token: process.env.DISCORD_CLIENT_TOKEN,
  },
  commands: {
    prefix: process.env.DISCORD_COMMAND_PREFIX || '!',
  },
};

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (!message.content.startsWith(config.commands.prefix)) {
    return;
  }

  const args = message.content.slice(1).split(/\s+/);
  const command = args.shift();

  if (command === 'help') {
    message.channel.send('help message');
  }
});

client.login(config.discord.token);
