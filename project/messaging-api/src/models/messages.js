const express = require('express')
const {sequelize} = require("../config/database")
const {DataTypes} = require('sequelize')

const Messages = sequelize.define("Messages",
    {
        id:
        {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true,
            allowNull: false,
        },

        senderID:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        recipientID:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        content:
        {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        sentTime:
        {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },

    {
        tablename: "messages",
        timestamps: false
    }

);

sequelize.sync().then(() => console.log("Üzenetek tábla létrehozva"));
module.exports = Messages;