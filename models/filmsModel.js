const mongoose = require( 'mongoose')

const Films = mongoose.model( 'films', new mongoose.Schema({
    fields: {
        starships: [
            {
                type: Number,
                required: true
            }
        ],
        edited: {
            type: Date,
            required: true
        },
        vehicles: [
            {
                type: Number,
                required: true
            }
        ],
        planets: [
            {
                type: Number,
                required: true
            }
        ],
        producer: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            required: true
        },
        episode_id: {
            type: Number,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        release_date: {
            type: Date,
            required: true
        },
        opening_crawl: {
            type: String,
            required: true
        },
        characters: [
            {
                type: Number,
                required: true
            }
        ],
        species: [
            {
                type: Number,
                required: true
            }
        ]
    },
    model: String,
    pk: Number,
    time : {
        type : Date,
        default: Date.now,
    },
}))

module.exports = { Films }
