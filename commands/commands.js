const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('commands')
		.setDescription('Give entire list of commands'),
	async execute(interaction) {
        const user = interaction.options.getUser('target');
		return interaction.reply({  });
	},
};