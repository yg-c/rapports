'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('rapport', {
        idRapport: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'idRapport'
        },
        dateRapport: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'dateRapport'
        },
        caBoissons: {
            type: DataTypes.DECIMAL ,
            allowNull: false,
            field: 'caBoissons'
        },
        caNourriture: {
            type: DataTypes.DECIMAL ,
            allowNull: false,
            field: 'caNourriture'
        },
        facture77: {
            type: DataTypes.DECIMAL ,
            allowNull: true,
            field: 'facture77'
        },
        facture25: {
            type: DataTypes.DECIMAL ,
            allowNull: true,
            field: 'facture25'
        },
        bons: {
            type: DataTypes.DECIMAL ,
            allowNull: true,
            field: 'bons'
        },
        chf: {
            type: DataTypes.DECIMAL ,
            allowNull: true,
            field: 'chf'
        },
        eur: {
            type: DataTypes.DECIMAL ,
            allowNull: true,
            field: 'eur'
        },
        reka: {
            type: DataTypes.DECIMAL,
            allowNull: true,
            field: 'reka'
        },

            idRestaurant: {
                type: DataTypes.INTEGER(11),
                allowNull: true,
                primaryKey: true,
                references: {
                    model: 'restaurant',
                    key: 'idRestaurant'
                },
                field: 'idRestaurant'
            },

        },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'rapport'
    },
        {
            classMethods: {
                associate: function (models) {
                    rapport.hasOne(models.restaurant);
                }
            }
        }
    );
};


