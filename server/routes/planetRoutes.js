const router = require("express").Router();
const sequelize = require("../config/connection");
const { Planet, Moon, Fact } = require("../models");

// GET all planets
router.get("/", async (req, res) => {
	try {
		const planetData = await Planet.findAll({
			include: [{ model: Moon }, { model: Fact }],
		});
		res.status(200).json(planetData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET a single Planet
router.get("/:name", async (req, res) => {
	try {
		const PlanetData = await Planet.findOne({ where: { name: req.params.name }, include: [{ model: Moon }, { model: Fact }] });
		if (!PlanetData) {
			res.status(404).json({ message: "No Planet found with that name!" });
			return;
		}
		res.status(200).json(PlanetData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
