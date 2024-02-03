const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class HomeOther extends Model {
        static associate() {

        }
    }

    HomeOther.init({
        image: { type: DataTypes.STRING(1000), },

        description1: {
            type: DataTypes.STRING(1000),
        },
        description2: {
            type: DataTypes.STRING(1000),
        },
        description3: {
            type: DataTypes.STRING(1000),
        },
        button1: {
            type: DataTypes.STRING,
        },
        button2: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_active2: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_active3: {
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
            tableName: 'homeother',
            modelName: 'HomeOther',
            underscored: true
        }
    );
    return HomeOther;
}