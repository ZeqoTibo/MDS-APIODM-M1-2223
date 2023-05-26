const mongoose = require( 'mongoose')

const Species = mongoose.model( 'species', new mongoose.Schema({
    fields: {
        edited: {
            type: String,
            required: true
        },
        classification: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
        created: {
            type: String,
            required: true
        },
        eye_colors: {
            type: String,
            required: true
        },
        people: {
            type: [Number],
            required: true
        },
        skin_colors: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        hair_colors: {
            type: String,
            required: true
        },
        homeworld: {
            type: Number,
            required: true
        },
        average_lifespan: {
            type: String,
            required: true
        },
        average_height: {
            type: String,
            required: true
        }
    },
    time : {
        type : Date,
        default: Date.now,
    },
}))

module.exports = { Species }
