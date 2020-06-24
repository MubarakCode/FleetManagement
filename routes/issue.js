const express = require("express");
const mongoose = require("mongoose");
const Issue = require("../models/Issue");
const Operator = require("../models/Operator");
const Vehicle = require("../models/Vehicle")

const router = express.Router();

const app = express();

// ROUTES

//Issue Route
router.get("/add", async (req, res) => {
    const operators = await Operator.find({});
    const vehicles = await Vehicle.find({});
    res.render("issue/add", {
        operators,
        vehicles
    });
});

//Issue Form Submit Route
router.post("/add", async (req, res) => {
    const {
        vehicle,
        date,
        summary,
        description,
        priority,
        operator
    } = req.body;

    console.log(req.body);
    const issue = new Issue({
        vehicle,
        date,
        summary,
        description,
        priority,
        operator
    })

    await issue.save();
    res.redirect("/issue/all")
});

//Issue-list
router.get("/all", async (req, res) => {
    const issues = await Issue.find({}).populate("vehicle") // Populate func returns ID
    res.render("issue/all", {
        issues,
    });
});

module.exports = router;