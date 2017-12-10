Buscape = typeof Buscape === 'undefined' ? {} : Buscape;
Buscape.Card = function () {

    var _api = Buscape.API();
    var _templateHtml = Buscape.Template();

    /**
     * Get products from API and render template Card
     * @private
     */
    var _showCards = function () {
        _api.getProducts(function (products) {
            _templateHtml.getTemplate('#template-card-product', products[0], '#target');
        });
    };

    return {
        init: function () {
            _showCards();
        }
    }
};
