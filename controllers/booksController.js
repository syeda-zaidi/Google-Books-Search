const db = require ("../model");

module.exports = {
    findAll: function(req, res) {
        db.Book.find({})
        .sort({ date: -1 })
        .then( dbbooks => {
            res.json(dbbooks)
        }).catch(err => {
            res.sendStatus(500);
            console.log(err);
        })
    },

    findById: function(req, res) {
        db.Book.findById( req.params.id )
        .then( dbbooks => {
            res.json(dbbooks)
        }).catch( err => {
            res.sendStatus(500);
            console.log(err);
        })
    },
    
}