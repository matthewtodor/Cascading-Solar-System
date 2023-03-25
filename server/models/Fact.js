const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fact extends Model {}

Moon.init(
	{
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		fact: {
			type: DataTypes.TEXT("medium"),
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
		modelName: "fact",
	}
);

module.exports = Fact;
