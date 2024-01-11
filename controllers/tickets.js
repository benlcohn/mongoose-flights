const Ticket = require('../models/ticket');

module.exports = {
  new: newTicket,
  create,
  delete: deleteTicket,
}

async function newTicket(req, res) {
  res.render('tickets/new', { title: 'New Ticket', flightId: req.params.flightId });
}

async function create(req, res) {
  try {
    req.body.flight = req.params.flightId
    await Ticket.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/flights/${req.params.flightId}`)
}

async function deleteTicket(req, res) {
  const ticketId = req.params.id;
  try {
    await Ticket.deleteOne({ ticketId });

  } catch (err) {
    console.error(`Error deleting ticket with ID ${ticketId}: ${err}`);
  }

  res.redirect(`/flights/${req.params.flightId}`);
}