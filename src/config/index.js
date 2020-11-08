module.exports = {
  discord: {
    token: process.env.DISCORD_CLIENT_TOKEN,
  },
  commands: {
    prefix: process.env.DISCORD_COMMAND_PREFIX || '!',
  },
};
