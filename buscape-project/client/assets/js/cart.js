Buscape = typeof Buscape === 'undefined' ? {} : Buscape;
Buscape.Cart = function () {

    var _templateHtml = Buscape.Template();
    var qtdProducts = 0;
    var paymentSummaryData;

    /**
     * @param str
     * @returns {string}
     * @private
     */
    var _limitLengthString = function (str) {
        return str.length > 40 ? str.substr(0, 40) + '...' : str;
    };

    /**
     * @returns {{installments: number, installmentValue: number, value: number}}
     * @private
     */
    var _paymentSummaryInitial = function () {
        return {
            installments: 0,
                installmentValue: 0,
            value: 0
        }
    };

    /**
     * Add product Cart
     *
     * @private
     */
    var _addCart = function() {

        // Get data from product
        var productCart = $(this).data();

        // Icrements quantity products
        qtdProducts++;

        // Notification quantity products on Cart
        $('.notification-quantity-products').html(qtdProducts);

        // Verify name is big
        productCart.name = _limitLengthString(productCart.name);

        // Render Payment Summary
        $('.payment-summary').remove();

        // Render Item from Cart
        _templateHtml.getTemplate('#template-items-cart', productCart, '.menu-drop-down');

        // Calcs payment summary with new product
        paymentSummaryData.installments = productCart.installments;
        paymentSummaryData.installmentValue += productCart.installmentValue;
        paymentSummaryData.value +=productCart.value;

        _templateHtml.getTemplate('#template-payment-summary', paymentSummaryData, '.menu-drop-down');
    };

    /**
     * @private
     */
    var _verifyPaymentSummary = function () {
        if ($('.menu-drop-down li').length == 1) {
            $('.menu-drop-down li').remove();
            paymentSummaryData = _paymentSummaryInitial();
        }
    };

    /**
     * Calcs Payment summary and fixed 2 decimals
     *
     * @param productRemoved
     * @private
     */
    var _calcsPaymentSummary = function (productRemoved) {
        paymentSummaryData.installmentValue -= productRemoved.installmentValue;
        paymentSummaryData.value -= productRemoved.value;

        paymentSummaryData.installmentValue = paymentSummaryData.installmentValue.toFixed(2);
        paymentSummaryData.value = paymentSummaryData.value.toFixed(2);
    };

    /**
     * Delete product from Cart
     *
     * @private
     */
    var _deleteProductCart = function () {
        var productRemoved = $(this).data();

        // Calcs Payment summary
        _calcsPaymentSummary(productRemoved);

        // Notification
        $('.notification-quantity-products').html(--qtdProducts);

        // Payment summary
        $('.payment-summary').remove();
        _templateHtml.getTemplate('#template-payment-summary', paymentSummaryData, '.menu-drop-down');

        // Remove product
        this.closest('li').remove();

        // Verify products exists and remove payment summary
        _verifyPaymentSummary();
    };

    /**
     * Add Listeners
     *
     * @private
     */
    var _addListener = function () {

        // Add product on cart
        $('.section-content').on('click', '.addCart', _addCart);

        // Click delete product from Cart
        $('.menu-drop-down').on('click', '.wrap-close', _deleteProductCart);
    };

    return {
        init: function () {
            paymentSummaryData = _paymentSummaryInitial();
            _addListener();
        }
    }
};