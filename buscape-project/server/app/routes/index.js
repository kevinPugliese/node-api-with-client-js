var api = require('../api'),
    path = require('path');

module.exports  = function(app) {
    
    app.route('/v1/products')
        .get(api.lista);

    app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};