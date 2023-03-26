const Moon = require("./Moon");
const Planet = require("./Planet");
const Fact = require("./Fact");

Planet.hasMany(Moon, {
	foreignKey: "planet_id",
});
Planet.hasMany(Fact, {
	foreignKey: "planet_id",
});
Moon.belongsTo(Planet, {
	foreignKey: "planet_id",
});
Fact.belongsTo(Planet, {
	foreignKey: "planet_id",
});
module.exports = { Planet, Moon, Fact };
