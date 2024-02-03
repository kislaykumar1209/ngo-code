const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Testimonial extends Model {
        static associate() {

        }
    }

    Testimonial.init({
        name: {
            type: DataTypes.STRING, allowNull: false,
        },
        designation: {
            type: DataTypes.STRING, allowNull: false,
        },
        comment: {
            type: DataTypes.STRING(500), allowNull: false,
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
        }
    },
        {
            sequelize,
            tableName: 'testimonial',
            modelName: 'Testimonial',
            underscored: true
        }
    );
    return Testimonial;
}