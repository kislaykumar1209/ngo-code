const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class Description extends Model {
        static associate() {

        }
    }

    Description.init({
        description1: {
            type: DataTypes.STRING(1000)
        },
        description2: {
            type: DataTypes.STRING(1000)
        },
        description3: {
            type: DataTypes.STRING(1000)
        },
        description4: {
            type: DataTypes.STRING(1000)
        },
        description5: {
            type: DataTypes.STRING(1000)
        },
        description6: {
            type: DataTypes.STRING(1000)
        },
        section: { type: DataTypes.STRING, },
        subsection: { type: DataTypes.STRING, },


    },
        {
            sequelize,
            tableName: 'description',
            modelName: 'Description',
            underscored: true
        }
    );
    return Description;
}