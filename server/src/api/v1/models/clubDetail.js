const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class ClubDetail extends Model {
        static associate() {

        }
    }

    ClubDetail.init({
        image: {
            type: DataTypes.STRING,
            // allowNull: false,

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
            tableName: 'clubdetail',
            modelName: 'ClubDetail',
            underscored: true
        }
    );
    return ClubDetail;
}