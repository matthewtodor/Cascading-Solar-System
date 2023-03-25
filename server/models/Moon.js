const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Moon extends Model {}

Moon.init(
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
		name_history: {
			type: DataTypes.TEXT("medium"),
			allowNull: false,
		},
		size: {
			type: DataTypes.BIGINT,
			allowNull: false,
		},
		planet_id: {
			type: DataTypes.BIGINT,
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
