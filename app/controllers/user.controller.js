const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Find a single Event with an id
exports.findOne = (req, res) => {
    const username = req.params.username;

    Event.findByPk(username, { include: [{ all: true, nested: true }] })
        .then(data => {
            res.status(200).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with username=" + username
            });
        });
};

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};