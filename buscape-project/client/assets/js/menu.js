Buscape = typeof Buscape === 'undefined' ? {} : Buscape;
Buscape.Menu = function () {

    var $_menu_drop = $('.menu-drop-down');
    var $_open_menu = 'open-menu';
    var $_menu = $('.menu-drop');

    /**
     * Show Menu
     * @private
     */
    var _menu = function () {
        $_menu_drop.toggle($_open_menu);
    };

    return {
        init: function () {
            $_menu.on('click', _menu);
        }
    }
};
