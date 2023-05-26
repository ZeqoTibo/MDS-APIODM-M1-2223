const mongoose = require( 'mongoose')

const Vehicles = mongoose.model( 'vehicles', {
    fields: {
        vehicle_class: String,
        pilots: Array,
    },
    model: String,
    pk: Number,
    time : {
        type : Date,
        default: Date.now,
    },
})

module.exports = { Vehicles }
