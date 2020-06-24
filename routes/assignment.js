const express = require("express")

const router = express.Router();

router.get("/assignment", (req, res) => {
    res.render("assignment")
})

router.post("/assignment", (req, res) => {
    let { startDate, endDate, TripDetails } = req.body;

    console.log(req.body);
});


module.exports = router