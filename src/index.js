const { Client, Intents, Collection } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fs = require('fs');

client.commands = new Collection();
client.buttons = new Collection();
require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith("js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith("js"));
const commmandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events")
    client.handleCommands(commmandFolders, "./src/commands")
    client.handleButtons();
    client.login(process.env.TOKEN)
})();