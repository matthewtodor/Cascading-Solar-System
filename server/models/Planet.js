const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Planet extends Model {}

Planet.init(
	{
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		size: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		sun_distance: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		core: {
			type: DataTypes.ENUM("solid", "gas"),
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "planet",
	}
);

module.exports = Planet;
