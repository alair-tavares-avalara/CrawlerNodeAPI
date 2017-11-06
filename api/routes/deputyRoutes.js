'use strict';

var deputy = require('../controllers/deputyController');

/**
 * Deputy Route - define deputy API routes
 */
class DeputyRoute {
    /**
     * Initialize DeputyRoute class.
     * @constructor
     * @param {Router} router The Express Router (express.Router())  
     */
    constructor(router) {
        router.route('/deputies')
            .get(deputy.listAll)
            .post(deputy.create);

        router.route('/deputies/:deputyId')
            .get(deputy.getById)
            .put(deputy.update)
            .delete(deputy.delete);
    }
}

module.exports = DeputyRoute;