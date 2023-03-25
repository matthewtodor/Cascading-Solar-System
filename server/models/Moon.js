const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Moon extends Model {}

Moon.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		planet_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "planet",
				key: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "moon",
	}
);

module.exports = Moon;
