const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class OurTeam extends Model {
        static associate() {

        }
    }

    OurTeam.init({
        name: {
            type: DataTypes.STRING, allowNull: false,
        },
        designation: {
            type: DataTypes.STRING, allowNull: false,
        },
        description: {
            type: DataTypes.STRING(500), allowNull: false,
        },
        image: {
            type: DataTypes.STRING, allowNull: false,
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
            tableName: 'ourteam',
            modelName: 'OurTeam',
            underscored: true
        }
    );
    return OurTeam;
}