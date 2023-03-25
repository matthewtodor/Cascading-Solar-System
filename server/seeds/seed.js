const sequelize = require("../config/connection");
const { Planet, Moon } = require("../models");

// json files in folder use metric system
//temp is in Kelvin
const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const planets = await Planet.bulkCreate();

	process.exit(0);
};

seedDatabase();
