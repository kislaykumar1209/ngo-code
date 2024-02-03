const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class GlobalSponser extends Model {
        static associate() {

        }
    }

    GlobalSponser.init({
        description1: {
            type: DataTypes.STRING(1000),
        },
        description2: {
            type: DataTypes.STRING(1000),
        },
        description3: {
            type: DataTypes.STRING(1000),
        },



    },
        {
            sequelize,
            tableName: 'globalsponser',
            modelName: 'GlobalSponser',
            underscored: true
        }
    );
    return GlobalSponser;
}