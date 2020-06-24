const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inspectionSchema = new Schema({
    vehicleIssue: {
        type: String,
        required: true,
        // ref: "Issue"
    },
    issueDate: {
        type: Date,
        required: true
    },
    dueDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model("Inspection", inspectionSchema)
// Mongoose creates the name of the collection as the plural of user