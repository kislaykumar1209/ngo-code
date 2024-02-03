const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class EventPageDescription extends Model {
        static associate() {

        }
    }

    EventPageDescription.init({
        EID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        heading: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        image1: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        heading2: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        image2: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description1: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        description2: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        description3: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        description4: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        heading3: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        video: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description5: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        description6: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        heading4: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        image3: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description7: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        description8: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        image4: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description9: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        description10: {
            type: DataTypes.STRING(1000),
            // allowNull: false,
        },
        Button: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        Headings3: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        Headings4: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        Images1: {
            type: DataTypes.STRING
        },
        Headings5: {
            type: DataTypes.STRING,
            // allowNull: false,
        },

        Images2: {
            type: DataTypes.STRING
        },

        Headings6: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        Headings7: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        Headings8: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        Headings9: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description12: {
            type: DataTypes.TEXT,
            // allowNull: false,
        },
        registrationLink: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        registrationButton: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        bannerHeading: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        bannerSubHeading: {
            type: DataTypes.STRING,
            // allowNull: false,
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
            tableName: 'eventPageDescription',
            modelName: 'EventPageDescription',
            underscored: true
        }
    );
    return EventPageDescription;
}