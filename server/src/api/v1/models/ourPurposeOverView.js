const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class OurPurpose extends Model {
        static associate() {

        }
    }

    OurPurpose.init({
        image: {
            type: DataTypes.STRING, allowNull: false,
        },
        icon: {
            type: DataTypes.STRING, allowNull: false,
        },
        category: {
            type: DataTypes.STRING, allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500), allowNull: false,
        },
        sequence: {
            type: DataTypes.INTEGER
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
            tableName: 'ourpurpose',
            modelName: 'OurPurpose',
            underscored: true
        }
    );
    return OurPurpose;
}