const express = require('express')
const {sequelize} = require("../config/database");
const {DataTypes} = require("sequelize");


const User = sequelize.define("User", {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
    },

},
    {
        tableName: "users",
        timestamps: false
    }
);

sequelize.sync()
    .then(()=> console.log("User table created"));