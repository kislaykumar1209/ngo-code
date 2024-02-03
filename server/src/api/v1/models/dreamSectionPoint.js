const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class DreamSectionPoint extends Model {
        static associate() {

        }
    }

    DreamSectionPoint.init({
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
            tableName: 'dreamsectionpoint',
            modelName: 'DreamSectionPoint',
            underscored: true
        }
    );
    return DreamSectionPoint;
}