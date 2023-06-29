/* eslint-disable no-console */
var { Vehicles } = require('../models/vehiclesModel');
const {Starships} = require("../models/starshipsModel");
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
    Vehicles.find((err, docs) => {
        if (!err) {
            res.status(201).send(docs)
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
    Vehicles.findById(id, (err, docs) => {
        if (!err) {
            res.status(201).send(docs)
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
    const newVehicle = new Vehicles(fields);
    try {
        const dataToSave = await newVehicle.save();
        res.status(201).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * Update
 * @param req
 * @param res
 * @returns {*}
 */
exports.update = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;

    try {
        const updatedVehicle = await Vehicles.findByIdAndUpdate(id, updates, {new: true});
        if (!updatedVehicle) {
            return res.status(404).json({message: 'Vehicle not found'});
        }
        res.status(201).json(updatedVehicle);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
/**
 * Delete
 * @param req
 * @param res
 * @returns {*}
 */
exports.delete = (req, res ) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.send(400).send(`No record with given id: ${id}`)
    }

    Vehicles.findByIdAndRemove(id, (err, docs) => {
        const result = {
            data: docs,
            message: 'Vehicles has been removed successfully.',
            status: 200,
        }

        if (!err) {
            res.status(201).send(result)
        } else {
            res.status(500).send(err)
        }
    })
}
