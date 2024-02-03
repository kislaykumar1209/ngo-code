const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class OurInfo extends Model {
        static associate() {

        }
    }

    OurInfo.init({
        number: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        clublocation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        googlemapUrl: {
            type: DataTypes.STRING(4000), allowNull: false,
        },
        facebook: {
            type: DataTypes.STRING, allowNull: false,
        },
        twitter: {
            type: DataTypes.STRING, allowNull: false,
        },
        instagram: {
            type: DataTypes.STRING, allowNull: false,
        },


    },
        {
            sequelize,
            tableName: 'ourinfo',
            modelName: 'OurInfo',
            underscored: true
        }
    );
    return OurInfo;
}