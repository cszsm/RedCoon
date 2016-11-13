/**
 * Renders the values into the template using the template engine
 */
module.exports = function (viewName) {

    return function (req, res) {
        res.render(viewName, res.tpl);
    };
};