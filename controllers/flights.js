const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight,
    create,
}

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index',  { flights });
}

function newFlight(req, res) {
    res.render('flights/new', {title: 'Add a flight', errorMsg: ''});
}

async function create(req, res) {
    try {
        await Flight.create(req.boduy);
        res.redirect('/flights/new');
    } catch (err) {
        console.log(error);
        res.render('flights/new', {errorMsg: error.message})
    }
}