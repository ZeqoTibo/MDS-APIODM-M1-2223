/* eslint-disable no-console */
var { Species } = require('../models/speciesModel');
const {Planets} = require("../models/planetsModel");
const {Vehicles} = require("../models/vehiclesModel");
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
    Species.find((err, docs) => {
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
    Species.findById(id, (err, docs) => {
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
    const newSpecies = new Species(fields);

    try {
        const dataToSave = await newSpecies.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;

    try {
        const updatedSpecies = await Species.findByIdAndUpdate(id, updates, {new: true});
        if (!updatedSpecies) {
            return res.status(404).json({message: 'Specie not found'});
        }
        res.status(200).json(updatedSpecies);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.delete = (req, res ) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.send(400).send(`No record with given id: ${id}`)
    }

    Species.findByIdAndRemove(id, (err, docs) => {
        const result = {
            data: docs,
            message: 'Species has been removed successfully.',
            status: 200,
        }

        if (!err) {
            res.status(200).send(result)
        } else {
            res.status(500).send(err)
        }
    })
}
