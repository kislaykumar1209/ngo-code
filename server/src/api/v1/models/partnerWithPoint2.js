const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class PartnerWithPoint2 extends Model {
        static associate() {

        }
    }

    PartnerWithPoint2.init({
        benefit: {
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
            tableName: 'partnerwithpoint2',
            modelName: 'PartnerWithPoint2',
            underscored: true
        }
    );
    return PartnerWithPoint2;
}