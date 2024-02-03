const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class FeaturedResource extends Model {
        static associate() {

        }
    }

    FeaturedResource.init({


        point: {
            type: DataTypes.STRING, allowNull: false,
        },
        CID: {
            type: DataTypes.INTEGER,
        },
        sequence: {
            type: DataTypes.INTEGER,
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
            tableName: 'featuredresource',
            modelName: 'FeaturedResource',
            underscored: true
        }
    );
    return FeaturedResource;
}