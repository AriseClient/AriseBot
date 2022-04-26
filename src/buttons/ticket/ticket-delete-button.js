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
            setTimeout(() => {
              interaction.channel.delete()
                    var ticketLogEmbed = new MessageEmbed()
            .setColor('RED')
            .setTitle('Deleted Ticket')
            .setDescription(`Ticket #${interaction.channel.name} has been deleted by <@${interaction.user.id}>`)
      interaction.guild.channels.cache.get("967605555868872774").send({embeds: [ticketLogEmbed]})
            }, (5000));
        }
    }
}