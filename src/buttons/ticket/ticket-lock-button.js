const {
    MessageEmbed,
    MessageActionRow,
    MessageButton
} = require('discord.js')

module.exports = {
    data: {
        name: "ticket-lock-button"
    },
    async execute(interaction, client) {
        if (interaction.guild.members.cache.find((member) => member.id === interaction.user.id).roles.cache.has('964697089206530100')) {
            interaction.channel.permissionOverwrites.edit(interaction.user, {
                SEND_MESSAGES: false
            });
            var supportLockedEmbed = new MessageEmbed()
                .setColor('YELLOW')
                .setDescription('This ticket has been locked.')
            const supportLockedRow = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setCustomId('ticket-delete-button')
                    .setStyle('SECONDARY')
                    .setEmoji('⛔'),
                );
            await interaction.reply({
                embeds: [supportLockedEmbed],
                components: [supportLockedRow]
            })
                var ticketLogEmbed = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Locked Ticket')
            .setDescription(`Ticket #${interaction.channel.name} has been locked by <@${interaction.user.id}>.`)
      interaction.guild.channels.cache.get("967605555868872774").send({embeds: [ticketLogEmbed]})
        }
    }
}