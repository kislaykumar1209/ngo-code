const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Donate extends Model {
        static associate() {

        }
    }

    Donate.init({
        heading1: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        heading2: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        button: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        heading3: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        heading4: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        image1:{
            type:DataTypes.STRING
        },
        heading5: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        
        image2:{
            type:DataTypes.STRING
        },

        heading6: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        heading7: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        heading8: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        heading9: {
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
            tableName: 'donate',
            modelName: 'Donate',
            underscored: true
        }
    );
    return Donate;
}