const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class LionPoint extends Model {
        static associate() {

        }
    }

    LionPoint.init({
        description1: {
            type: DataTypes.STRING,
        },
        description2: {
            type: DataTypes.STRING,
        },

        description3: {
            type: DataTypes.STRING,
        },


    },
        {
            sequelize,
            tableName: 'lionpoint',
            modelName: 'LionPoint',
            underscored: true
        }
    );
    return LionPoint;
}