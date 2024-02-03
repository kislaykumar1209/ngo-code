const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class OverView extends Model {
        static associate() {

        }
    }

    OverView.init({
        image: {
            type: DataTypes.STRING, allowNull: false,
        },
        heading: {
            type: DataTypes.STRING, allowNull: false,
        },
        comment: {
            type: DataTypes.STRING(500), allowNull: false,
        },
        sequence: {
            type: DataTypes.INTEGER
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
            tableName: 'overview',
            modelName: 'OverView',
            underscored: true
        }
    );
    return OverView;
}