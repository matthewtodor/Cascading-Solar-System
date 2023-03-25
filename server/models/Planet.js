const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Planet extends Model {}

Planet.init(
	{
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		size: {
			type: DataTypes.FLOAT(10, 1),
			allowNull: false,
		},
		sun_distance: {
			type: DataTypes.BIGINT,
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
