const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class HomeAbout extends Model {
        static associate() {

        }
    }

    HomeAbout.init({
        description1: {
            type: DataTypes.STRING(1000),
        },
        description2: {
            type: DataTypes.STRING(1000),
        },
        description3: {
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
            tableName: 'homeabout',
            modelName: 'HomeAbout',
            underscored: true
        }
    );
    return HomeAbout;
}