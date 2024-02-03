const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class HomeExtra extends Model {
        static associate() {

        }
    }

    HomeExtra.init({
        image: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description2: {

            type: DataTypes.STRING(1000)
        },
        description3: {
            type: DataTypes.STRING(1000),
        },
        heading: {
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
            tableName: 'homeExtra',
            modelName: 'HomeExtra',
            underscored: true
        }
    );
    return HomeExtra;
}