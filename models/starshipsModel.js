const mongoose = require( 'mongoose')

const Starships = mongoose.model( 'starships', new mongoose.Schema({
    fields: {
        pilots: {
            type: [Number],
            default: []
        },
        MGLT: {
            type: String,
            required: true
        },
        starship_class: {
            type: String,
            required: true
        },
        hyperdrive_rating: {
            type: String,
            required: true
        }
    },
    time : {
        type : Date,
        default: Date.now,
    },
}))

module.exports = { Starships }
