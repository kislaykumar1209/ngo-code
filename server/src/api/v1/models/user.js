const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class User extends Model {
        static associate() {

        }
    }

    User.init({
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // image: {
        //     type: DataTypes.STRING,
        // },

        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
        {
            sequelize,
            tableName: 'user',
            modelName: 'User',
            underscored: true
        }
    );
    return User;
}