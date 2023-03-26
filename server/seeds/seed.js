const sequelize = require("../config/connection");
const { Planet, Moon, Fact } = require("../models");
const planetData = require("./planets");
const moonData = require("./moons");
const factData = require("./facts");

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	const planets = await Planet.bulkCreate(planetData);
	const moons = await Moon.bulkCreate(moonData);
	const fact = await Fact.bulkCreate(factData);
	process.exit(0);
};

seedDatabase();
