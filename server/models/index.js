const Moon = require("./Moon");
const Planet = require("./Planet");

Moon.belongsTo(Planet, {
	foreignKey: "planet_id",
});

module.exports = { Planet, Moon };
