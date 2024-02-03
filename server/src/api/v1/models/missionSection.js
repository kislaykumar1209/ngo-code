const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Mission extends Model {
        static associate() {

        }
    }

    Mission.init({
        dreams: {
            type: DataTypes.STRING,
        },
        mission: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },


    },
        {
            sequelize,
            tableName: 'mission',
            modelName: 'Mission',
            underscored: true
        }
    );
    return Mission;
}