const { MessageEmbed, MessageActionRow , MessageButton } = require('discord.js')

module.exports = {
    data: {
        name: "ticket-create-button"
    },
    async execute(interaction, client) {
        if (!interaction.guildId == '964021898075840552') return console.log('Wrong guild.')
        const alreadyChannel = interaction.guild.channels.cache.find(c => c.name === `ticket-${interaction.user.discriminator}`)
        if(alreadyChannel) return await interaction.reply({content: `You have already created a ticket. (${alreadyChannel})`, ephemeral: true}).catch(console.error);
        var supportWelcomeEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setDescription('Support will be here to assist you shortly.')
        const supportWelcomeRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId('ticket-lock-button')
                .setStyle('SECONDARY')
                .setEmoji('🔒'),
            );
        const channel = await interaction.guild.channels.create(`ticket-${interaction.user.discriminator}`)
        var supportDirectEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Your ticket has been created')
            .setDescription(`Our support team will asssit you in ${channel}.`)
        channel.setParent('964023638842019881')
        channel.permissionOverwrites.edit(interaction.guildId, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false
        });
        channel.permissionOverwrites.edit(interaction.user, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true
        });
        await interaction.reply({
            embeds: [supportDirectEmbed],
            ephemeral: true
        });
        channel.send({
            content: `<@&964697089206530100>, <@${interaction.user.id}> needs support.`,
            embeds: [supportWelcomeEmbed],
            components: [supportWelcomeRow]
        })
                var ticketLogEmbed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('New Ticket')
            .setDescription(`A new ticket has been created by <@${interaction.user.id}>`)
      interaction.guild.channels.cache.get("967605555868872774").send({embeds: [ticketLogEmbed]})
    }
}