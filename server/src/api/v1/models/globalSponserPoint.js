const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class GlobalSponserPoint extends Model {
        static associate() {

        }
    }

    GlobalSponserPoint.init({
        point: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sequence: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            tableName: 'globalsponserpoint',
            modelName: 'GlobalSponserPoint',
            underscored: true
        }
    );
    return GlobalSponserPoint;
}