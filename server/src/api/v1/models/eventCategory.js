const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class EventCategory extends Model {
        static associate() {

        }
    }

    EventCategory.init({
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heading: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
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
            tableName: 'eventcategory',
            modelName: 'EventCategory',
            underscored: true
        }
    );
    return EventCategory;
}