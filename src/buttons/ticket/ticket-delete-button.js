const {
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require('discord.js')

module.exports = {
    data: {
        name: "ticket-delete-button"
    },
    async execute(interaction, client) {
        if (interaction.guild.members.cache.find((member) => member.id === interaction.user.id).roles.cache.has('964697089206530100')) {
            await interaction.reply('Deleting ticket in 5 seconds...')
            setTimeout(() => interaction.channel.delete(), (5000));
        }
    }
}