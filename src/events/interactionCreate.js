const { MessageEmbed, MessageActionRow , MessageButton } = require('discord.js')
const Discord = require('discord.js') 

const cooldown = new Map();

module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if(interaction.isCommand()) {

            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            if(!cooldown.has(command.data.name)) {
                cooldown.set(command.data.name, new Discord.Collection());
            }

            const current_time = Date.now();
            const time_stamps = cooldown.get(command.data.name)
            const cooldown_amount = (command.cooldown) * 1000;


            if(time_stamps.has(interaction.user.id)) {
                const expiration_time = time_stamps.get(interaction.user.id) + cooldown_amount;
                if(current_time < expiration_time) {
                    const time_left = ((expiration_time - current_time) / 1000);
                    return await interaction.reply({content: `Please wait ${time_left.toFixed(1)} seconds before using \`/${command.data.name}\``, ephemeral: true});
                }
            }

            time_stamps.set(interaction.user.id, current_time);
            setTimeout(() => time_stamps.delete(interaction.user.id), cooldown_amount);

            try {
                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this command.',
                    ephemeral: true
                });
            }
        } else if (interaction.isButton()) {
            const button = client.buttons.get(interaction.customId);
            if (!button) return await interaction.reply({content: `There was no code associated with that button.`, ephemeral: true})
            
            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'There was an error while executing this button.',
                    ephemeral: true
                });
            }
        }

    },
};