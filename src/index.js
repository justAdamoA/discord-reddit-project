require('dotenv').config();
const { Client } = require('discord.js');
const config = require('./config');
const { messageEventHandler } = require('./lib/event-handlers');

const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', messageEventHandler);

client.login(config.discord.token);
