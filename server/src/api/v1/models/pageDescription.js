const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class PageDescription extends Model {
        static associate() {

        }
    }

    PageDescription.init({
        image: {
            type: DataTypes.STRING, allowNull: false,
        },
        section: {
            type: DataTypes.STRING, allowNull: false,
        },
        subsection: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING(500), allowNull: false,
        }, is_active: {
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
            tableName: 'pagedescription',
            modelName: 'PageDescription',
            underscored: true
        }
    );
    return PageDescription;
}