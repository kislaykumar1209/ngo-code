const { Model } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    class MemberForm extends Model {
        static associate() {

        }
    }

    MemberForm.init({
        document: {
            type: DataTypes.STRING,
            allowNull: false,
        },



    },
        {
            sequelize,
            tableName: 'memberform',
            modelName: 'MemberForm',
            underscored: true
        }
    );
    return MemberForm;
}