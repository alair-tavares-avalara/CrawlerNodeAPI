'use strict';

var deputy = require('../controllers/deputyController');

class DeputyRoute {
    constructor(app) {
        app.route('/deputies')
            .get(deputy.listAll)
            .post(deputy.create);

        app.route('/deputies/:deputyId')
            .get(deputy.getById)
            .put(deputy.update)
            .delete(deputy.delete);
    }
}

module.exports = DeputyRoute;