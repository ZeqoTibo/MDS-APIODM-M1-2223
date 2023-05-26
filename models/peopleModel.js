const mongoose = require( 'mongoose')

const People = mongoose.model( 'people', new mongoose.Schema({
    fields: {
        edited: {
            type: Date,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        skin_color: {
            type: String,
            required: true
        },
        hair_color: {
            type: String,
            required: true
        },
        height: {
            type: String,
            required: true
        },
        eye_color: {
            type: String,
            required: true
        },
        mass: {
            type: String,
            required: true
        },
        homeworld: {
            type: Number,
            required: true
        },
        birth_year: {
            type: String,
            required: true
        }
    },
    time : {
        type : Date,
        default: Date.now,
    },
}))

module.exports = { People }
