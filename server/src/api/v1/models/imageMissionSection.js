const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Image extends Model {
        static associate() {

        }
    }

    Image.init({
        image: {
            type: DataTypes.STRING,
        },
        issue: {
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
            tableName: 'image',
            modelName: 'Image',
            underscored: true
        }
    );
    return Image;
}