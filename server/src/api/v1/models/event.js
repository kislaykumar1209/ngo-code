const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Event extends Model {
        static associate() {

        }
    }

    Event.init({
        heading: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        document: { type: DataTypes.STRING, allowNull: false, },
        subheading: { type: DataTypes.STRING, },

        startingTime: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        endingTime: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        address: {
            type: DataTypes.STRING,
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
            tableName: 'event',
            modelName: 'Event',
            underscored: true
        }
    );
    return Event;
}