'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Images", deps: []
 * createTable "Infos", deps: []
 * createTable "securities", deps: []
 * createTable "Users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2022-06-18T00:55:13.201Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Images",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "Image": {
                    "type": Sequelize.STRING,
                    "field": "Image"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Infos",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "MiddleInitial": {
                    "type": Sequelize.STRING,
                    "field": "MiddleInitial"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "EmailAddress": {
                    "type": Sequelize.STRING,
                    "field": "EmailAddress",
                    "unique": true
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true
                },
                "PhoneNumber": {
                    "type": Sequelize.INTEGER,
                    "field": "PhoneNumber"
                },
                "HouseNumber": {
                    "type": Sequelize.INTEGER,
                    "field": "HouseNumber"
                },
                "StreetName": {
                    "type": Sequelize.STRING,
                    "field": "StreetName"
                },
                "StreetCity": {
                    "type": Sequelize.STRING,
                    "field": "StreetCity"
                },
                "StreetState": {
                    "type": Sequelize.STRING,
                    "field": "StreetState"
                },
                "StreetZipCode": {
                    "type": Sequelize.INTEGER,
                    "field": "StreetZipCode"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "securities",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "UserPassword": {
                    "type": Sequelize.STRING,
                    "field": "UserPassword"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
