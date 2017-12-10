Buscape = typeof Buscape === 'undefined' ? {} : Buscape;
Buscape.API = typeof Buscape.API === 'undefined' ? {} : Buscape.API;
Buscape.API = function () {

    var url_product = 'v1/product';

    /**
     * @param callback
     * @private
     */
    var _getProducts = function (callback) {
        $.ajax({
            url: url_product,
            type: 'GET',
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {
                callback(res);
            }
        });
    };

    return {
        getProducts: _getProducts
    }
};
