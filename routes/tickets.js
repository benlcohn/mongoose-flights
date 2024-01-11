const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


// GET /flights/:flightId/tickets/new (new)
router.get('/flights/:flightId/tickets/new', ticketsCtrl.new);
// POST /flights/:flightId/tickets (create)
router.post('/flights/:flightId/tickets', ticketsCtrl.create);
// DELETE  /tickets/:id
router.delete('/flights/:flightId', ticketsCtrl.delete)

module.exports = router;