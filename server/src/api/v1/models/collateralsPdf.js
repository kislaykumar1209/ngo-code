const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class CollateralsPDF extends Model {
        static associate() {

        }
    }

    CollateralsPDF.init({
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pdf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
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
            tableName: 'collateralsPDF',
            modelName: 'CollateralsPDF',
            underscored: true
        }
    );
    return CollateralsPDF;
}