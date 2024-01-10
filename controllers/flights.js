const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
    show,
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index',  { title: 'All of your flights', flights });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add a flight', errorMsg: '' });
}

async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    try {
      await Flight.create(req.body);
      res.redirect('/flights/new');
    } catch (err) {
      console.log(err);
      res.render('flights/new', { errorMsg: error.message })
    }
  }

  async function show(req, res) {
    const flight = await Flight.findById(req.param.id);
    res.render('flights/show', { title: 'Flight Details', flight });
  }

  async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const airports = ["DEN", "DFW", "JFK", "LAX", "SEA", "SFO"].filter(airport => {
      if (flight.airport.includes(airport) || flight.destinations.some((destinations) => destinations.airport === airport)) {
        return false;
      }
      return true;
    });
    res.render('flights/show', { title: 'Flight Details', flight, airports });
  }