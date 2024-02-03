const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Footer extends Model {
        static associate() {

        }
    }

    Footer.init({
        description: {
            type: DataTypes.STRING(1000),
        },
        button: {
            type: DataTypes.STRING,
        },
        copyright: {
            type: DataTypes.STRING(1000),
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
            tableName: 'footer',
            modelName: 'Footer',
            underscored: true
        }
    );
    return Footer;
}