const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong'),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		return interaction.reply({ content: `Pong! 🏓`, ephemeral: true });
	},
};