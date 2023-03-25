const Moon = require("./Moon");
const Planet = require("./Planet");
const Fact = require("./Fact");

Moon.belongsTo(Planet, {
	foreignKey: "planet_id",
});
Fact.belongsTo(Planet, {
	foreignKey: "planet_id",
});
module.exports = { Planet, Moon };
