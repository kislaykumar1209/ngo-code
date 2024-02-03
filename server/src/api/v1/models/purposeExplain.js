const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Explain extends Model {
        static associate() {

        }
    }

    Explain.init({
        image: {
            type: DataTypes.STRING,
        },
        sequence: {
            type: DataTypes.INTEGER,
        },
        heading: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING(500),
        },
        PID: {
            type: DataTypes.INTEGER,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },


    },
        {
            sequelize,
            tableName: 'detail',
            modelName: 'Explain',
            underscored: true
        }
    );
    return Explain;
}