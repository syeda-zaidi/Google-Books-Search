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

    create: function( req, res) {
        db.Book.create(req.body)
        .then( dbbooks => {
            res.json(dbbooks);
        }).catch (err => {
            console.log(err);
            res.sendStatus(500);
        });
    },

    update: function( req, res) {
        db.Book.update( { _id: req.params.id }, req.body)
        .then( dbbooks => {
            res.json(dbbooks);
        }).catch (err => {
            console.log(err);
            res.sendStatus(500);
        });
    },

    remove: function (req, res) {
        db.Book.deleteOne({ _id: req.params.id })
        .then( dbbooks => {
            res.json(dbbooks);
        }).catch (err => {
            console.log(err);
            res.sendStatus(500);
        });
    }
    
};