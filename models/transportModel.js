const mongoose = require( 'mongoose')
const {Schema} = require("mongoose");

const Transport = mongoose.model( 'transport', new Schema({
    fields: {
        edited: { type: Date, required: true },
        consumables: { type: String, required: true },
        name: { type: String, required: true },
        created: { type: Date, required: true },
        cargo_capacity: { type: String, required: true },
        passengers: { type: String, required: true },
        max_atmosphering_speed: { type: String, required: true },
        crew: { type: String, required: true },
        length: { type: String, required: true },
        model: { type: String, required: true },
        cost_in_credits: { type: String, required: true },
        manufacturer: { type: String, required: true }
    },
    time : {
        type : Date,
        default: Date.now,
    },
}, { collection: 'transport' }))

module.exports = { Transport }
