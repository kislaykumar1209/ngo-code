const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class ActivePage extends Model {
        static associate() {

        }
    }

    ActivePage.init({
        section: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },

        subsection: {
            type: DataTypes.STRING(1000),
            allowNull: false,
        },

        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },



    },
        {
            sequelize,
            tableName: 'activepage',
            modelName: 'ActivePage',
            underscored: true
        }
    );
    return ActivePage;
}