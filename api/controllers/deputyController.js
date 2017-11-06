'use strict';

var mongoose = require('mongoose');
var Deputy = mongoose.model('Deputy');


/**
 * List all deputies
 * @param req Request
 * @param res Response
 */
exports.listAll = function (req, res) {
    Deputy.find({}, function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};

/**
 * Create a deputy
 * @param req Request
 * @param res Response
 */
exports.create = function (req, res) {
    var new_deputy = new Deputy(req.body);
    new_deputy.save(function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};

/**
 * Get a deputy by ID
 * @param req Request
 * @param res Response
 */
exports.getById = function (req, res) {
    Deputy.findById(req.params.deputyId, function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};

/**
 * Update a deputy
 * @param req Request
 * @param res Response
 */
exports.update = function (req, res) {
    Deputy.findOneAndUpdate({ _id: req.params.deputyId }, req.body, { new: true }, function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};

/**
 * Delete a deputy
 * @param req Request
 * @param res Response
 */
exports.delete = function (req, res) {
    Deputy.remove({
        _id: req.params.deputyId
    }, function (err, deputy) {
        if (err)
            res.send(err);
        res.json({ message: 'Deputy successfully deleted' });
    });
};