const { Model } = require('sequelize');
// const PhotoGallery = sequelize.import('./photoGallery');

module.exports = function (sequelize, DataTypes) {
    class GalleryImage extends Model {
        static associate() {

        }
    }

    GalleryImage.init({
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        heading: {
            type: DataTypes.STRING,
        },
        GID: {
            type: DataTypes.INTEGER,

        },
        GIDD: {
            type: DataTypes.INTEGER,
            references: {
                model: 'PhotoGallery',
                key: 'id',
            }
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
            tableName: 'Galleryimage',
            modelName: 'GalleryImage',
            underscored: true
        }
    );

    // PhotoGallery.hasOne(GalleryImage);
    return GalleryImage;
}