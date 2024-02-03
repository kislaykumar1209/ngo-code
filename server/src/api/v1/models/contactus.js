const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class ContactUs extends Model {
        static associate() {

        }
    }

    ContactUs.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject: {
            type: DataTypes.STRING(1000),
            allowNull: false,

        },


    },
        {
            sequelize,
            tableName: 'contactus',
            modelName: 'ContactUs',
            underscored: true
        }
    );
    return ContactUs;
}