'use strict';

var mongoose = require('mongoose');
var Deputy = mongoose.model('Deputy');


exports.listAll = function (req, res) {
    Deputy.find({}, function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};


exports.create = function (req, res) {
    var new_deputy = new Deputy(req.body);
    new_deputy.save(function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};


exports.getById = function (req, res) {
    Deputy.findById(req.params.deputyId, function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};


exports.update = function (req, res) {
    Deputy.findOneAndUpdate({ _id: req.params.deputyId }, req.body, { new: true }, function (err, deputy) {
        if (err)
            res.send(err);
        res.json(deputy);
    });
};


exports.delete = function (req, res) {
    Deputy.remove({
        _id: req.params.deputyId
    }, function (err, deputy) {
        if (err)
            res.send(err);
        res.json({ message: 'Deputy successfully deleted' });
    });
};