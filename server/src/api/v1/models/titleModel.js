const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Title extends Model {
        static associate() {

        }
    }

    Title.init({
        section: {
            type: DataTypes.STRING,
        },
        title1: {
            type: DataTypes.STRING,
        },
        title2: {
            type: DataTypes.STRING,
        },
        title3: {
            type: DataTypes.STRING,
        },
        title4: {
            type: DataTypes.STRING,
        },
        title5: {
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
        is_active4: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_active5: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },


    },
        {
            sequelize,
            tableName: 'title',
            modelName: 'Title',
            underscored: true
        }
    );
    return Title;
}