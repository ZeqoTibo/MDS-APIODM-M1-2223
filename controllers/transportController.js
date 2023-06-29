/* eslint-disable no-console */
var { Transport } = require('../models/transportModel');
const {Vehicles} = require("../models/vehiclesModel");
var ObjectID = require( 'mongoose'). Types.ObjectId;

function parseEntryBody(requestBody) {
   return requestBody;
}
/**
 * @swaggerdf
 * @param req
 * @param res
 */
exports.index = (req, res ) => {
    Transport.find((err, docs) => {
        console.log(Transport)
        console.log(docs)
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
    Transport.findById(id, (err, docs) => {
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
    const fields = parseEntryBody(req.body);
    const newTransport = new Transport({transport: fields});
    try {
        const dataToSave = await newTransport.save();
        res.status(201).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

/**
 * PUT
 * @param req
 * @param res
 * @returns {*}
 */
exports.update = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;

    try {
        const updatedTransport = await Transport.findByIdAndUpdate(id, updates, {new: true});
        if (!updatedTransport) {
            return res.status(404).json({message: 'Transport not found'});
        }
        res.status(201).json(updatedTransport);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
/**
 * DELETE
 * @param req
 * @param res
 * @returns {*}
 */
exports.delete = (req, res ) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.send(400).send(`No record with given id: ${id}`)
    }

    Transport.findByIdAndRemove(id, (err, docs) => {
        const result = {
            data: docs,
            message: 'Transport has been removed successfully.',
            status: 200,
        }

        if (!err) {
            res.status(201).send(result)
        } else {
            res.status(500).send(err)
        }
    })
}
