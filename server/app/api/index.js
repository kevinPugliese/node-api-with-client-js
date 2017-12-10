var db = require('../../config/database');

var api = {};

api.register = function(req, res) {
    var product = req.body;
    delete product._id;
    db.insert(product, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Adicionado com sucesso: ' + newDoc._id);
        res.json(newDoc._id);
    });
};

api.search = function(req, res) {
    db.find({}).exec(function(err, doc) {
        if (err) return console.log(err);
        res.json(doc);
    });
};

module.exports = api;
