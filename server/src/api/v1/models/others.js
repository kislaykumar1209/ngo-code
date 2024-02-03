const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Others extends Model {
        static associate() {

        }
    }

    Others.init({
        section: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description1: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description2: {
            type: DataTypes.STRING,
        },
        description3: {
            type: DataTypes.STRING,
        },
        button: {
            type: DataTypes.STRING,
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
            tableName: 'others',
            modelName: 'Others',
            underscored: true
        }
    );
    return Others;
}