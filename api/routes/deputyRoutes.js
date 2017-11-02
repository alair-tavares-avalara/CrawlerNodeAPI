'use strict';

module.exports = function (app) {
    var deputy = require('../controllers/deputyController');

    // deputy Routes
    app.route('/deputies')
        .get(deputy.listAll)
        .post(deputy.create);


    app.route('/deputies/:deputyId')
        .get(deputy.getById)
        .put(deputy.update)
        .delete(deputy.delete);
};