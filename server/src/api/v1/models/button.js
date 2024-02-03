const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Button extends Model {
        static associate() {

        }
    }

    Button.init({
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


    },
        {
            sequelize,
            tableName: 'button',
            modelName: 'Button',
            underscored: true
        }
    );
    return Button;
}