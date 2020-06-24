const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    vehicle: {
        type: String,
        ref: 'vehicle',
        required: false
    },
    Driver: {
        type: String,
        ref: 'driver',
        required: false
    },
    startDate: {
        type: Number,
        ref: 'start Date',
        required: true
    },

    endDate: {
        type: Number,
        ref: 'end Date',
        required: true
    },
    TripDetails: {
        type: String,
        ref: 'Trip details',
        required: true
    }
});

module.exports = mongoose.model('assignment', userSchema);