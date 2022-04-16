const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Create a suggestion.')
        .addStringOption(option =>
            option.setName('suggestion')
                .setDescription('Your suggestion.')
                .setRequired(true)),
    cooldown: 60,
    async execute(interaction, client) {
        if (!interaction.guild) return await interaction.reply('You can only use this command in guilds.')
        const string = interaction.options.getString('suggestion')
        const channel = client.guilds.cache.get('964021898075840552').channels.cache.get('964724441496055908')

        const embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({ dynamic: true }))
            .setDescription(string)
        
        channel.send({embeds: [embed]}).then((msg) => {
            msg.react('👍')
        }).catch((err) =>{
            throw err;
        })

        await interaction.reply('Sucessfully created suggestion.')
    },
};