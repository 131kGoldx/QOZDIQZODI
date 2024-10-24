const { readdirSync } = require('fs');

const login = (client) => {
    const Discord = require("discord.js");
    const logs = require('discord-logs');
    logs(client);
    const disbut = require('discord-buttons');
    disbut(client);
    const tempo = require("./gestion/tempo.js");
    tempo(client);

    // Charger la configuration de config.json
    client.config = require("../config.json");
    
    // Charger le token depuis token.json
    client.tokenConfig = require("../token.json"); // Assurez-vous que le chemin est correct

    client.cooldown = new Array();
    client.interaction = {};
    client.guildInvites = new Map();
    client.queue = new Map();
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.snipes = new Map();
    client.inter = new Array();

    // Connexion du bot en utilisant le token du fichier token.json
    client.login(client.tokenConfig.token);
};

module.exports = {
    login
};
