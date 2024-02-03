const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class PhotoGallery extends Model {
        static associate() {

        }
    }

    PhotoGallery.init({
        image: {
            type: DataTypes.STRING, allowNull: false,
        },
        heading: {
            type: DataTypes.STRING, allowNull: false,
        },
        sequence: {
            type: DataTypes.STRING,
        },
        date: {
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
            tableName: 'Photogallery',
            modelName: 'PhotoGallery',
            underscored: true
        }
    );
    return PhotoGallery;
}