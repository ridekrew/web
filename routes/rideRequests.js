var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://root:admin@ds161630.mlab.com:61630/krew_dev', ['rideRequests']);

// Get all ride requests
router.get('/rideRequests', (req, res, next) => {
    db.rideRequests.find((err, rideRequests) => {
        if (err) {
            res.send(err);
        } else {
            res.json(rideRequests)
        }
    });
});

// Save ride request
router.post('/rideRequest', (req, res, next) => {
    var rideRequest = req.body;
    if (!rideRequest.origin || !rideRequest.destination || !rideRequest.date || !rideRequest.time) {
        res.status(400);
        res.json({
            "error": "missing data"
        });
    }
    db.rideRequests.save(rideRequest, (err, rideRequest) => {
        if (err) {
            res.send(err);
        } else {
            res.json(rideRequest);
        }
    });
});

// Delete ride request
router.delete('/rideRequest/:id', (req, res, next) => {
    db.rideRequests.remove({_id: mongojs.ObjectId(req.params.id)}, (err, rideRequest) => {
        if (err) {
            res.send(err);
        } else {
            res.json(rideRequest);
        }
    });
});

module.exports = router;