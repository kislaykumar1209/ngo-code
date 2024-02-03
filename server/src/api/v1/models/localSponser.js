const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class LocalSponser extends Model {
        static associate() {

        }
    }

    LocalSponser.init({
        image: {
            type: DataTypes.STRING,

        },
        description1: {

            type: DataTypes.STRING(1000)
        },
        description2: {
            type: DataTypes.STRING(1000),
        },
        url: {
            type: DataTypes.STRING(1000),
        },
        sequence: {
            type: DataTypes.INTEGER, allowNull: false,
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
            tableName: 'localsponser',
            modelName: 'LocalSponser',
            underscored: true
        }
    );
    return LocalSponser;
}