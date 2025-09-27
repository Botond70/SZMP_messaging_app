const express = require('express')
const {sequelize} = require("../config/database");
const {DataTypes} = require("sequelize");

const Friend = sequelize.define("Friend",
    {
        id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        sender:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        recipient:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        status:
        {
            type: DataTypes.ENUM("függőben", "elfogadva", "elutasitva"),
            defaultValue: "függőben",
            allowNull: false,
        },

        requestedtime:
        {
            type: DataTypes.DATE,
            allowNull: false,
        },

    },
    {
        tableName: "friends",
        timestamps: false
    }


);

sequelize.sync({alter:true}).then(() => console.log("Barátok tábla létrehozva")).catch(err => console.log(err));

module.exports = Friend;