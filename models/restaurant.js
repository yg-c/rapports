'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('restaurant', {
            idRestaurant: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                field: 'idRestaurant'
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                field: 'name'
            },
            compteCaisse: {
                type: DataTypes.INTEGER ,
                allowNull: false,
                field: 'compteCaisse'
            },
            compteCout: {
                type: DataTypes.INTEGER ,
                allowNull: false,
                field: 'compteCout'
            },
            compteChf: {
                type: DataTypes.INTEGER ,
                allowNull: false,
                field: 'compteChf'
            },
            compteEur: {
                type: DataTypes.INTEGER ,
                allowNull: false,
                field: 'compteEur'
            },
            compteReka: {
                type: DataTypes.INTEGER ,
                allowNull: false,
                field: 'compteReka'
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'restaurant'
        },
        {
            classMethods: {
                associate: function (models) {
                    personne.belongsTo(models.rapport);
                }
            }
        }
    );
};


