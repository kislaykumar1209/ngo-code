const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class HomeBanner extends Model {
        static associate() {

        }
    }

    HomeBanner.init({
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heading: {
            type: DataTypes.STRING,
        },
        subheading: {
            type: DataTypes.STRING,
        },
        link: {
            type: DataTypes.STRING,
        },
        button: {
            type: DataTypes.STRING,
        },
        sequence: {
            type: DataTypes.INTEGER,
        },
        section: { type: DataTypes.STRING, allowNull: false, },
        subsection: { type: DataTypes.STRING, allowNull: false, },
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
            tableName: 'homebanner',
            modelName: 'HomeBanner',
            underscored: true
        }
    );
    return HomeBanner;
}