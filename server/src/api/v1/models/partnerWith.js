const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class PartnerWithComment extends Model {
        static associate() {

        }
    }

    PartnerWithComment.init({
        description1: {
            type: DataTypes.STRING,
        },
        description2: {
            type: DataTypes.STRING,
        },




    },
        {
            sequelize,
            tableName: 'partnerwithcomment',
            modelName: 'PartnerWithComment',
            underscored: true
        }
    );
    return PartnerWithComment;
}