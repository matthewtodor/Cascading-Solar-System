const sequelize = require("../config/connection");
const { Planet, Moon } = require("../models");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const planets = await Planet.bulkCreate();

	process.exit(0);
};

seedDatabase();
