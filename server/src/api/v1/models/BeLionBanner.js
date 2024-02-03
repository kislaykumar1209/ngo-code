const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class LionBanner extends Model {
        static associate() {

        }
    }

    LionBanner.init({
        heading: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        subheading: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(1000),
        },
        document: {
            type: DataTypes.STRING(1000),
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
            tableName: 'lionbanner',
            modelName: 'LionBanner',
            underscored: true
        }
    );
    return LionBanner;
}