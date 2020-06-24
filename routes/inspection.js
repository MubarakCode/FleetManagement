const express = require("express")
const mongoose = require("mongoose");
const Inspection = require("../models/Inspection");
const Issue = require("../models/Issue");
const issueRoute = require("../routes/issue");

const router = express.Router();

const app = express();

app.use(issueRoute);

// ROUTES
//Index
router.get("/", (req, res) => {
    res.render("index");
});

//Inspection Route
router.get("/inspection", async (req, res) => {
    const issues = await Issue.find({})
    res.render("inspection", {
        issues
    });
});


// Inspection Form Submit Route
router.post("/inspection", (req, res) => {

    const {
        vehicleIssue,
        issueDate,
        dueDate
    } = req.body;

    console.log(req.body);

    const inspection = new Inspection({
        vehicleIssue,
        issueDate,
        dueDate
    })

    console.log(inspection);

    inspection.save(() => {
        res.redirect("/inspection-list")
    });
})

//Inspection list
router.get("/inspection-list", async (req, res) => {
    const inspections = await Inspection.find({})
    res.render("inspection-list", {
        inspections
    });
});

module.exports = router;