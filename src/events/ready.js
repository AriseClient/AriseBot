const { MessageEmbed, MessageActionRow , MessageButton } = require('discord.js')
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setPresence({
            status: "online"
        })
        client.user.setActivity(`Arise Client`, { type: "PLAYING" })

		// const supportEmbed = new MessageEmbed()
		// 	supportEmbed.setColor('FF5A51')
		// 	supportEmbed.setTitle('Support')
		// 	supportEmbed.setDescription('Click the :envelope_with_arrow: button below to create a support ticket.')
		// const supportActionRow = new MessageActionRow()
		// 	.addComponents(
		// 	new MessageButton()
		// 	.setCustomId('ticket-create-button')
		// 	.setLabel('Create a ticket')
		// 	.setStyle('SECONDARY')
		// 	.setEmoji('📩'),
		// );
		// client.channels.cache.get('964023656395206686').send({ embeds: [supportEmbed], components: [supportActionRow]});
	},
};