const mongoose = require( 'mongoose')

const Planets = mongoose.model( 'planets', new mongoose.Schema({
    fields: {
        edited: {
            type: Date,
            required: true
        },
        climate: {
            type: String,
            required: true
        },
        surface_water: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        diameter: {
            type: String,
            required: true
        },
        rotation_period: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            required: true
        },
        terrain: {
            type: String,
            required: true
        },
        gravity: {
            type: String,
            required: true
        },
        orbital_period: {
            type: String,
            required: true
        },
        population: {
            type: String,
            required: true
        }
    },
    time : {
        type : Date,
        default: Date.now,
    },
}))

module.exports = { Planets }
