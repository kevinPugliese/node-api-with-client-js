Buscape = typeof Buscape === 'undefined' ? {} : Buscape;
Buscape.Template = function () {

    /**
     * Render templates
     *
     * @param element
     * @param data
     * @param container
     * @private
     */
    var _template = function (element, data, container) {
        var template = $(element).html();
        Mustache.parse(template);

        var rendered = Mustache.render(template, data);
        $(container).append(rendered);
    };

    return {
        getTemplate: _template
    }
};
