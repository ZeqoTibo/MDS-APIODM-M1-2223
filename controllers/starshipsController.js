/* eslint-disable no-console */
var { Starships } = require('../models/starshipsModel');
const {Species} = require("../models/speciesModel");
var ObjectID = require( 'mongoose'). Types.ObjectId;

function parseEntryBody(requestBody) {
    let { fields, model } = requestBody;
    fields = fields ? fields : null;
    model = model ? model.toString() : null;
    return { fields, model};
}
/**
 * Get
 * @param req
 * @param res
 */
exports.index = (req, res ) => {
    Starships.find((err, docs) => {
        if (!err) {
            res.status(200).send(docs)
        } else {
            res.status(500).send(err)
        }
    })
};

/**
 * Get by id
 * @param req
 * @param res
 * @returns {*}
 */
exports.getById = (req, res ) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.send(400).send(`No record with given id: ${id}`)
    }
    Starships.findById(id, (err, docs) => {
        if (!err) {
            res.status(200).send(docs)
        } else {
            res.status(500).send(err)
        }
    })
};

/**
 * Post
 * @param req
 * @param res
 */
exports.insert = async (req, res) => {
    const fields = req.body;
    const newStarship = new Starships(fields);
    try {
        const dataToSave = await newStarship.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



exports.update = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;

    try {
        const updatedStarship = await Starships.findByIdAndUpdate(id, updates, {new: true});
        if (!updatedStarship) {
            return res.status(404).json({message: 'Starship not found'});
        }
        res.status(200).json(updatedStarship);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.delete = (req, res ) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.send(400).send(`No record with given id: ${id}`)
    }

    Starships.findByIdAndRemove(id, (err, docs) => {
        const result = {
            data: docs,
            message: 'Starships has been removed successfully.',
            status: 200,
        }

        if (!err) {
            res.status(200).send(result)
        } else {
            res.status(500).send(err)
        }
    })
}
