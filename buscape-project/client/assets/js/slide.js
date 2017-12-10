Buscape = typeof Buscape === 'undefined' ? {} : Buscape;
Buscape.Slide = function () {

    var $_container = $('.section-content');
    var _slide = '.slide-img';
    var url_img_error = 'http://4.bp.blogspot.com/-W1s91N1YUQc/URauAIgv_-I/AAAAAAAAAF8/BC9sWDKQQbQ/s210/uiukjnggfgf.jpg';

    /**
     * Verify url is 404
     *
     * @param imageUrl
     * @returns {*}
     * @private
     */
    var _checkImg = function(imageUrl) {
        var img = new Image();
        img.src = imageUrl;

        if (!img.height > 0) {
            return url_img_error;
        }
        return imageUrl;
    };

    /**
     * Show Img slide clicked
     *
     * @private
     */
    var _slideImg = function () {
        var src = _checkImg($(this).attr('src'));
        var img = $(this).closest('div').children('img');

        img.attr('src', src);
    };

    return {
        init: function () {
            $_container.on('click', _slide, _slideImg);
        }
    }
};
