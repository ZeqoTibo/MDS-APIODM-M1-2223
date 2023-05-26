var { Films } = require('../models/filmsModel');
const {People} = require("../models/peopleModel");
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
    Films.find((err, docs) => {
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
    Films.findById(id, (err, docs) => {
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
    const newFilm = new Films(fields);

    try {
        const dataToSave = await newFilm.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    const {id} = req.params;
    const updates = req.body;

    try {
        const updatedFilm = await Films.findByIdAndUpdate(id, updates, {new: true});
        if (!updatedFilm) {
            return res.status(404).json({message: 'Film not found'});
        }
        res.status(200).json(updatedFilm);
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

    Films.findByIdAndRemove(id, (err, docs) => {
        const result = {
            data: docs,
            message: 'Films has been removed successfully.',
            status: 200,
        }

        if (!err) {
            res.status(200).send(result)
        } else {
            res.status(500).send(err)
        }
    })
}
