const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class PartnerWithPoint1 extends Model {
        static associate() {

        }
    }

    PartnerWithPoint1.init({
        oppourtunity: {
            type: DataTypes.STRING, allowNull: false,
        },
        sequence: {
            type: DataTypes.INTEGER, allowNull: false,
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
            tableName: 'partnerwithpoint1',
            modelName: 'PartnerWithPoint1',
            underscored: true
        }
    );
    return PartnerWithPoint1;
}