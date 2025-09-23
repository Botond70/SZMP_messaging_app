const express = require('express')
const {sequelize} = require("../config/database")
const {DataTypes} = require("sequelize")

const Friend = sequelize.define("Friend",
    {
        id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            primarykey: true,
            autoIncrement: true,
        },

        sender:
        {
            type: DataTypes.STRING,
            allowNull: false,

        },

        recipient:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },

        status:
        {
            type: DataTypes.ENUM("függőben", "elfogadva", "elutasitva"),
            defaultValue: "fuggőben",
            allowNull: false,
        },

        requestedtime:
        {
            type: DataTypes.DATE,
            allowNull: false,
        },

    },
    {
        tablename: "friends",
        timestamps: false
    }


);

sequelize.sync().then(() => console.log("Barátok tábla létrehozva"));

module.exports = Friend;