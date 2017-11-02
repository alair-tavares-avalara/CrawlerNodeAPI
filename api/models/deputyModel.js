'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DeputySchema = new Schema({
    id: {
        type: Number,
        required: 'Kindly enter the name of the deputy'
    },
    name: {
        type: String,
        required: 'Kindly enter the name of the deputy'
    },
    fullName: {
        type: String,
        required: 'Kindly enter the full name of the deputy'
    },
    birthday: {
        type: String
    },
    state: {
        type: String
    },
    phone: {
        type: String
    },
    postalCode: {
        type: String
    },
    office: {
        type: String
    },
    legislatures: {
        type: String
    },
    party: {
        type: String
    },
    urlProfileImage: {
        type: String
    },
    urlContact: {
        type: String
    },
    urlBio: {
        type: String
    }
});

module.exports = mongoose.model('Deputy', DeputySchema);