/* eslint-disable no-console */
var { People } = require('../models/peopleModel');
const {Planets} = require("../models/planetsModel");
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
    People.find((err, docs) => {
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
    People.findById(id, (err, docs) => {
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
    const newPeople = new People(fields);

    try {
        const dataToSave = await newPeople.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.update = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;

    try {
        const updatedPeople = await People.findByIdAndUpdate(id, updates, {new: true});
        if (!updatedPeople) {
            return res.status(404).json({message: 'People not found'});
        }
        res.status(200).json(updatedPeople);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

exports.delete = (req, res ) => {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.send(400).send(`No record with given id: ${id}`)
    }

    People.findByIdAndRemove(id, (err, docs) => {
        const result = {
            data: docs,
            message: 'People has been removed successfully.',
            status: 200,
        }

        if (!err) {
            res.status(200).send(result)
        } else {
            res.status(500).send(err)
        }
    })
}
