const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class HomeWhatWeDo extends Model {
        static associate() {

        }
    }

    HomeWhatWeDo.init({
        image: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        description2: {

            type: DataTypes.STRING(1000)
        },
        description3: {
            type: DataTypes.STRING(1000),
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
            tableName: 'homewhatwedo',
            modelName: 'HomeWhatWeDo',
            underscored: true
        }
    );
    return HomeWhatWeDo;
}