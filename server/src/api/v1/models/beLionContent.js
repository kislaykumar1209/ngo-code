const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class LionContent extends Model {
        static associate() {

        }
    }

    LionContent.init({
        point: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },
        sequence: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
            tableName: 'lioncontent',
            modelName: 'LionContent',
            underscored: true
        }
    );
    return LionContent;
}